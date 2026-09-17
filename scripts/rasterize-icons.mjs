// Rasterises app/icon.svg into the PNG icons using headless Chrome.
// Invoked by scripts/generate-icons.py.
import { chromium } from "playwright-core";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("app/icon.svg", "utf8");
const targets = [
  [180, "app/apple-icon.png"],
  [32, "app/icon.png"],
];

const browser = await chromium.launch();
for (const [size, out] of targets) {
  const context = await browser.newContext({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const scaled = svg.replace(/width="\d+" height="\d+"/, `width="${size}" height="${size}"`);
  await page.setContent(`<html><body style="margin:0">${scaled}</body></html>`);
  writeFileSync(out, await page.screenshot());
  console.log(`wrote ${out} (${size}px)`);
  await context.close();
}
await browser.close();
