import { createContext } from "react";

interface CollapseContext {
  state: boolean | undefined;
  setState: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const CollapseContext = createContext<CollapseContext>({
  state: false,
  setState: () => {}
});
