import React from "react";
import { useState } from "react";
import LoginModal from "../components/Auth/Modal/LoginModal";
import { ModalContext } from "./context";



export const ModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [view, setView] = useState('signIn')

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <ModalContext.Provider value={{ openLogin, closeLogin, view, setView }}>
      {children}

      {isLoginOpen && <LoginModal />}
      

    </ModalContext.Provider>
  );
};

