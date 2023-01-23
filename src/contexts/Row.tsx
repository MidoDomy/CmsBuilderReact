import { createContext } from "react";

interface RowContextValue {
  cols: number | undefined;
  gap: number | undefined;
}

export const RowContext = createContext<RowContextValue>({
  cols: 12,
  gap: 32
});
