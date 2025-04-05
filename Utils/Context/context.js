import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [name, setName] = useState("");
  const [allchatrooms, setAllChatrooms] = useState([]); // Initialize allchatrooms state
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        allchatrooms,
        setAllChatrooms,
        modalVisible,
        setModalVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
