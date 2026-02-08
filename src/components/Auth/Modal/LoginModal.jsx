import React from "react";

// import SignIn from "../Auth/SignIn/SignIn.js";
import {useModal} from "../../../context/ModalContext";
import SignIn from "../SignIn/SignIn";

function LoginModal() {
  const { closeLogin } = useModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  ">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeLogin}
      />

      <div className="relative z-10 bg-white rounded-lg shadow-xl">
        <button
          onClick={closeLogin}
          className="absolute top-3 right-4 text-xl"
        >
          ×
        </button>

        <SignIn onSuccess={closeLogin} />
      </div>
    </div>
  );
}

export default LoginModal;
