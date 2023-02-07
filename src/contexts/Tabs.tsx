import { createContext } from "react";

interface TabsContext {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

export const TabsContext = createContext<TabsContext>({
  current: '',
  setCurrent: () => {}
});
