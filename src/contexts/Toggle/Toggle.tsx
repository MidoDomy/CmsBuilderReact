import React, { useState } from "react";

import { ToggleContext } from './Context'

type Props = {
  children?: React.ReactNode
}

const Toggle: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ToggleContext.Provider value={{state, setState}}>
      {children}
    </ToggleContext.Provider>
  );
}

export default Toggle;
