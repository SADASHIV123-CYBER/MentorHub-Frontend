import React from "react";
import { createContext, useContext, useState } from "react";
import LoginModal from "../components/Auth/Modal/LoginModal";
// import LoginModal from "../components/Modal/LoginModal";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <ModalContext.Provider value={{ openLogin, closeLogin }}>
      {children}

      {isLoginOpen && <LoginModal />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
