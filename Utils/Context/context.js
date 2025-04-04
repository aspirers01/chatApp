import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [name, setName] = useState("");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
