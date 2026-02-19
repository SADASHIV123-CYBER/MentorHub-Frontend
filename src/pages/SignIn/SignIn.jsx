import React, { useEffect, useRef } from "react";
import  { useContext } from "react";
import { useState } from "react"
import Input from "../../components/Input/Input.jsx";
import { client } from "../../Api/client.js"
import { AuthContext, ModalContext } from "../../context/context.js";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";


function SignIn({onSuccess}) {

    // const [form, setForm] = useState({ email: "", password: "" });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);
    const {openLogin, setView} = useContext(ModalContext)


    // const handleChange = (e) => {
    //     // setForm({ ...form, [e.target.name]: e.target.value });
    //     e.preventDefault()
    // };

    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    },[])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     setLoading(true);

    //     try {
    //         const loginRes = await client.post("/auth/login", {
    //             email,
    //             password
    //         });
    //         console.log("loginRes: ",loginRes.status, loginRes.data);

    //         // const verifyRes = await client.get("/verify");
    //         // console.log("verifyRes:", verifyRes.status , verifyRes.data);

    //         // if(verifyRes?.data?.sucess && verifyRes.data.user) {
    //         //     (verifyRes.data.user);
    //         //     navigate("/");
    //         //     return
    //         // }

    //         setUser(loginRes.user);

    //         console.log(setUser);
            
    //         onSuccess?.();

    //         navigate("/")

    //         // setError(verifyRes?.data?.message || "Unable to verify user after login")
            
    //     } catch (err) {
    //         console.error("Login flow error:", err?.response || err);
    //         // const serverMsg = err?.response?.data?.message;
    //         // if (serverMsg) setError(serverMsg);
    //         if (err?.response?.status === 401) setError("Unauthorized — invalid credentials or token.");
    //         else setError("Invalid email or password, Please check and try again.");
    //         } finally {
    //         setLoading(false);
    //         }           
    //     }

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
        await client.post("/auth/login", { email, password });

        const verifyRes = await client.get("/verify");

        console.log("User:----->", verifyRes);
        

        const role = verifyRes.data.user.role;


        if (verifyRes?.data?.user) {
        setUser(verifyRes.data.user);   
        onSuccess?.();
        navigate("/student");

        if(role === 'User') {
            navigate('/student')
        } else if(role === 'Mentor') {
            navigate('/mentor');
        } else {
            navigate('/admin')
        }
        return;
        }

        setError("Unable to verify user after login");
    } catch (err) {
        console.error("Login flow error:", err?.response || err);

        if (err?.response?.status === 401)
        setError("Invalid email or password");
        else
        setError("Login failed. Please try again.");
    } finally {
        setLoading(false);
    }
    };


    
    return(

        <div className="bg-white h-120 w-120 p-10 m-auto">
        
            <div className="flex flex-col items-center ">
                <h2 className="font-bold text-3xl" >Sign in to mentorHub</h2>
                <p className="text-gray-400 mt-5 ">Welcome back! Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7">
                <div className="flex flex-col gap-3 p-2">
                    <div>
                    <Input 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder=""                     // value={form.email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={error === 'Invalid email or password, Please check and try again.' ? "border-red-500 hover:border-red-700 " : "" }
                        ref={inputRef}
                        required={true}

                    />

                </div>

                <div>
                    <Input 
                        label="Password"
                        name="password"
                        type="password"
                        // value={form.password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                        className={error === 'Invalid email or password, Please check and try again.' ? "border-red-500 hover:border-red-700 " : "" }
                    />
                </div>

                </div>

                {error && <p className="text-red-400"> {error} </p> }

                    <Button text={loading ? "signing in..." : "Sign In" } styleType="special-btn" className="w-full h-12 mt-8 " type="submit" />

            </form>

            <div className=" mt-3 justify-center  ">
                <span className="text-gray-400 ml-20">Don’t have an account?</span> {" "}
                < button onClick={() => {
                    openLogin();
                    setView('signUp')
                }} className=" cursor-pointer text-gray-700  hover:[transform:translateY(-0.5px)] " >
                    SignUp
                </button>
            </div>

            <div className="flex justify-center mt-4" >
                <button onClick={() => {
                    openLogin();
                    setView('forgotPassword')
                }} className="text-blue-500 hover:text-blue-700 hover:underline" >Forgot Password</button>
            </div>
        </div>
        
    )
}

export default SignIn