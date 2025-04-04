import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [name, setName] = useState("");
  const [showlogin, setShowLogin] = useState(false);
  return (
    <GlobalContext.Provider value={{ name, showlogin, setShowLogin, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
