import React, { useContext } from "react"
import logo from "../../assets/logo.png"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
// import { ModalContext } from "../../context/context"

import { AuthContext, ModalContext } from "../../context/context"


function Navbar() {



    const {openLogin, setView} = useContext(ModalContext)


    const {user} = useContext(AuthContext);
    console.log(user);
    

    
    return (
        <nav className="h-30 p-8 w-full bg-white mt-5  rounded-md flex flex-row justify-between items-center">
            <div className="flex  items-center">
                <img src={logo} alt="" className="h-16 w-16 cursor-pointer " />
            </div>

            <div className="flex justify-between w-85">
                <span className=" text-[#5F6B64] cursor-pointer ">Mentors</span>
                <span className=" text-[#5F6B64] cursor-pointer "> How it Works</span>
                <span className=" text-[#5F6B64] cursor-pointer "> Pricing</span>
                <span className=" text-[#5F6B64] cursor-pointer "> About</span>
            </div>

            {user ? ( 

                user.profilePicture ? (
                 <img src={user?.profilePicture} alt="profilePicture" className="h-12 w-12 rounded-full object-cover " /> 
                    
                ): (
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-lg " >
                        {user.fullName?.charAt(0).toUpperCase()}
                    </div>
                )
            ) : 
            
            
            
            <div className="flex flex-row justify-between w-45">
                <div>

                    {/* <Link to="/signIn"> <Button  styleType="signIn" text={"Sign In"} onClickHandler={() => setLoginOpen(true)} /> </Link> */}

                    <Button  styleType="signIn" text={"Sign In"} onClickHandler={() => {
                        openLogin();
                        setView('signIn')
                    }} />
                </div>
                <div>
                    <Button styleType="special-btn" specialText={"Sign Up"} onClickHandler={() => {
                        openLogin();
                        setView('signUp')
                    }}  />
                </div>
            </div>}
        </nav>
    )
}

export default Navbar