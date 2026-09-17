import { getProduct } from "./products";

const STORAGE_KEY = "ss-jewelry-bag";

export type CartLine = { slug: string; quantity: number };

export type CartState = {
  lines: CartLine[];
  /** False until localStorage has been read, so the UI can avoid a flash. */
  ready: boolean;
};

/**
 * A module-level store rather than React state: the bag is read from
 * localStorage, which is an external system, so components subscribe to it
 * through `useSyncExternalStore` and server renders always see EMPTY.
 */
const EMPTY: CartState = { lines: [], ready: false };

let state: CartState = EMPTY;
const listeners = new Set<() => void>();

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.flatMap((entry) => {
      if (typeof entry !== "object" || entry === null) return [];
      const { slug, quantity } = entry as Partial<CartLine>;
      if (typeof slug !== "string" || !getProduct(slug)) return [];
      const safeQuantity = Number.isFinite(quantity) ? Math.floor(Number(quantity)) : 1;
      return safeQuantity > 0 ? [{ slug, quantity: safeQuantity }] : [];
    });
  } catch {
    // Private browsing, blocked storage or corrupt JSON — start empty.
    return [];
  }
}

function persist(lines: CartLine[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // The bag just won't survive a reload.
  }
}

function commit(lines: CartLine[]) {
  state = { lines, ready: true };
  persist(lines);
  listeners.forEach((listener) => listener());
}

function hydrate() {
  if (state.ready) return;
  state = { lines: readStoredLines(), ready: true };
  listeners.forEach((listener) => listener());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  hydrate();
  return () => {
    listeners.delete(listener);
  };
}

export const getSnapshot = () => state;
export const getServerSnapshot = () => EMPTY;

export function addLine(slug: string, quantity = 1) {
  if (!getProduct(slug)) return;
  const existing = state.lines.find((line) => line.slug === slug);
  commit(
    existing
      ? state.lines.map((line) =>
          line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line,
        )
      : [...state.lines, { slug, quantity }],
  );
}

export function setLineQuantity(slug: string, quantity: number) {
  commit(
    quantity <= 0
      ? state.lines.filter((line) => line.slug !== slug)
      : state.lines.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
  );
}

export function removeLine(slug: string) {
  commit(state.lines.filter((line) => line.slug !== slug));
}

export function clearLines() {
  commit([]);
}
