import { createContext } from "react";

interface DropdownContext {
  state: boolean | undefined;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  position: string | undefined;
}

export const DropdownContext = createContext<DropdownContext>({
  state: false,
  setState: () => {},
  position: 'bottom right'
});
