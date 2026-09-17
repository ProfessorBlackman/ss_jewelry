"""Regenerate the S&S favicon set: a cream Playfair "S" on the brand green.

Run from the project root after a build (it reads the Playfair Display file
that next/font downloaded into .next/static/media):

    python3 scripts/generate-icons.py

Writes app/icon.svg, app/icon.png, app/apple-icon.png and app/favicon.ico.
The SVG is the source of truth; the raster sizes are derived from it with
headless Chrome. If playwright-core or Pillow aren't installed, only the SVG
is rewritten and the existing PNG/ICO files are left alone.
"""

import glob
import os
import pathlib
import subprocess
import sys

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

FOREST = "#0f4a36"  # --color-forest
CREAM = "#f5f1e5"  # --color-cream
SIZE = 64
CAP_RATIO = 0.68  # the S fills this much of the tile's height
WEIGHT = 600  # heavier than the wordmark so hairlines survive at 16px


def find_playfair() -> str:
    """next/font splits the family across unicode-range subsets, so pick the
    Playfair file that actually carries a Latin capital S."""
    for path in sorted(glob.glob(".next/static/media/*.woff2"), key=os.path.getsize, reverse=True):
        try:
            font = TTFont(path)
            name = font["name"].getDebugName(4) or ""
            if "Playfair" in name and "fvar" in font and ord("S") in font.getBestCmap():
                return path
        except Exception:
            continue
    sys.exit("No Playfair Display variable font found — run `pnpm build` first.")


def build_svg() -> str:
    font = instancer.instantiateVariableFont(TTFont(find_playfair()), {"wght": WEIGHT})
    glyphs = font.getGlyphSet()
    glyph = glyphs[font.getBestCmap()[ord("S")]]

    bounds = BoundsPen(glyphs)
    glyph.draw(bounds)
    x_min, y_min, x_max, y_max = bounds.bounds

    pen = SVGPathPen(glyphs)
    glyph.draw(pen)

    target_h = SIZE * CAP_RATIO
    scale = target_h / (y_max - y_min)
    width = (x_max - x_min) * scale
    tx = (SIZE - width) / 2 - x_min * scale
    ty = (SIZE - target_h) / 2 + y_max * scale

    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}" '
        f'width="{SIZE}" height="{SIZE}" role="img" aria-label="S&amp;S Jewelry">\n'
        f'  <rect width="{SIZE}" height="{SIZE}" fill="{FOREST}"/>\n'
        f'  <path transform="translate({tx:.3f} {ty:.3f}) '
        f'scale({scale:.6f} -{scale:.6f})" fill="{CREAM}" d="{pen.getCommands()}"/>\n'
        "</svg>\n"
    )


def main() -> None:
    pathlib.Path("app/icon.svg").write_text(build_svg())
    print("wrote app/icon.svg")

    # The PNG/ICO step needs playwright-core and Pillow, which are only used
    # here — install them on demand rather than carrying them as project deps:
    #   pnpm add -D playwright-core && pip install pillow
    try:
        subprocess.run(["node", "scripts/rasterize-icons.mjs"], check=True)
        from PIL import Image
    except (subprocess.CalledProcessError, FileNotFoundError, ImportError) as error:
        print(f"Skipped the PNG/ICO step ({error}). app/icon.svg is up to date.")
        return

    # Next's ICO decoder requires RGBA sub-images.
    source = Image.open("app/apple-icon.png").convert("RGBA")
    source.save("app/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("wrote app/favicon.ico")


if __name__ == "__main__":
    main()
