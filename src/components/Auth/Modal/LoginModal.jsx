import React, { useContext, useState } from "react";

// import SignIn from "../Auth/SignIn/SignIn.js";
// import {useModal} from "../../../context/ModalContext";
import SignIn from "../SignIn/SignIn";
import { ModalContext } from "../../../context/context";
import SignUp from "../SignUp/SignUp";

function LoginModal() {

  const { closeLogin, view } = useContext(ModalContext);
  // const [view, setView] = useState('signIn');




  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center rounded-md ">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeLogin}
      />

      <div className="relative z-10   bg-white rounded-lg shadow-xl p-5 flex items-center ">
        <button
          onClick={closeLogin}
          className=" h-6 w-6 absolute top-3 right-4 text-xl hover:bg-gray-200 rounded-md mb-3 transition duration-300 ease-in-out "
        >
          ×
        </button>

        {view === 'signIn' ? <SignIn onSuccess={closeLogin} /> : <SignUp onSuccess={closeLogin} />}

        {/* <SignIn onSuccess={closeLogin} /> */}
      </div>
    </div>
  );
}

export default LoginModal;
