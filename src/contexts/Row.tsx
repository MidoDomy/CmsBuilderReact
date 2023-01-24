import { createContext } from "react";

interface RowContextValue {
  cols: number | undefined;
  gapX: number | undefined;
  gapY: number | undefined;
}

export const RowContext = createContext<RowContextValue>({
  cols: 12,
  gapX: 32,
  gapY: 0
});
