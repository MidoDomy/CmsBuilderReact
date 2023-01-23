import { createContext } from "react";

interface RowContextValue {
  cols: number | undefined;
  gap: number | undefined;
  gapX: number | undefined | null;
  gapY: number | undefined | null;
}

export const RowContext = createContext<RowContextValue>({
  cols: 12,
  gap: 32,
  gapX: null,
  gapY: null
});
