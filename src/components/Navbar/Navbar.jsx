import React from "react"
import logo from "../../assets/logo.png"
import Button from "../Button/Button"

function Navbar() {
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

            <div className="flex flex-row justify-between w-45">
                <div>
                    <Button  styleType="signIn" text={"Sign In"}/>
                </div>
                <div>
                    <Button styleType="signUp" specialText={"Sign Up"} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar