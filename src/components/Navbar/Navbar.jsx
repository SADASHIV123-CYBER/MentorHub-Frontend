import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { AuthContext, ModalContext } from "../../context/context";
import { Link } from "react-router-dom";

function Navbar() {
  const { openLogin, setView } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const handleOpenSignIn = () => {
    openLogin();
    setView("signIn");
  };

  const handleOpenSignUp = () => {
    openLogin();
    setView("signUp");
  };

  const renderAvatar = () => {
    if (user?.profilePicture) {
      return (
        <img
          src={user.profilePicture}
          alt={user.fullName || "profile"}
          className="h-12 w-12 rounded-full object-cover border border-gray-200"
        />
      );
    }

    return (
      <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-lg text-gray-700">
        {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
      </div>
    );
  };

  return (
    <nav className="h-24 px-8 w-full bg-[#001a33] mt-5 rounded-md flex items-center justify-between shadow-sm">

    <Link to="/" >
      
      <div className="flex items-center gap-3 cursor-pointer">
        <img src={logo} alt="MentorHub logo" className="h-20 w-20" />
        {/* <span className="font-bold text-xl text-gray-800">MentorHub</span> */}
      </div>
      
    </Link>

      <div className="hidden md:flex items-center gap-10 text-[#87b1d3] font-medium">
        <span className="cursor-pointer hover:text-white transition">Mentors</span>
        <span className="cursor-pointer hover:text-white transition">How it Works</span>
        <span className="cursor-pointer hover:text-white transition">Pricing</span>
        <span className="cursor-pointer hover:text-white transition">About</span>
      </div>

      {user ? (
        <div className="flex items-center gap-4">

          <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
            {user.role}
          </span>

          {renderAvatar()}

        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            styleType="signIn"
            text="Sign In"
            onClickHandler={handleOpenSignIn}
          />
          <Button
            styleType="special-btn"
            specialText="Sign Up"
            onClickHandler={handleOpenSignUp}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
