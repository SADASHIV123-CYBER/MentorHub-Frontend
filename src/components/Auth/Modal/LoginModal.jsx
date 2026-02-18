import React, { useContext } from "react";

import SignIn from "../../../pages/SignIn/SignIn.jsx";
import SignUp from "../../../pages/SignUp/SignUp.jsx";
import { ModalContext } from "../../../context/context";

function LoginModal() {

  const { closeLogin, view,  } = useContext(ModalContext);

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


      </div>
    </div>
  );
}

export default LoginModal;
