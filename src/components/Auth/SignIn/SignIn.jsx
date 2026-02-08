import React from "react";
import  { useContext } from "react";
import { useState } from "react"
import Input from "../../Input/Input.jsx";
import { client } from "../../../Api/client.js"
import { AuthContext } from "../../../context/context.js";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button.jsx";


function SignIn({onSuccess}) {

    // const [form, setForm] = useState({ email: "", password: "" });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext)


    // const handleChange = (e) => {
    //     // setForm({ ...form, [e.target.name]: e.target.value });
    //     e.preventDefault()
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const loginRes = await client.post("/auth/login", {
                email,
                password
            });
            console.log("loginRes: ",loginRes.status, loginRes.data);

            const verifyRes = await client.get("/verify");
            console.log("verifyRes:", verifyRes.status , verifyRes.data);

            // if(verifyRes?.data?.sucess && verifyRes.data.user) {
            //     (verifyRes.data.user);
            //     navigate("/");
            //     return
            // }

            setUser(loginRes.data.user);
            onSuccess?.();

            navigate("/")

            setError(verifyRes?.data?.message || "Unable to verify user after login")
            
        } catch (err) {
            console.error("Login flow error:", err?.response || err);
            // const serverMsg = err?.response?.data?.message;
            // if (serverMsg) setError(serverMsg);
            if (err?.response?.status === 401) setError("Unauthorized — invalid credentials or token.");
            else setError("Invalid email or password. Try again.");
            } finally {
            setLoading(false);
            }           
        }

    
    return(

        <div className="bg-white h-120 w-120 p-10 m-auto">
        
            <div>
                <h2>MentorHub</h2>
                <p>Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit}>

                <div>
                    <Input 
                        label="Email"
                        name="email"
                        placeholder=""
                        // value={form.email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="focus:ring-[#2DA58D]"

                    />

                </div>

                <div>
                    <Input 
                        label="Password"
                        name="password"
                        // value={form.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <p> {error} </p> }

                    <Button text={loading ? "signing in..." : "Sign In" } styleType="special-btn" className="w-full h-12 mt-8 " type="submit" />

            </form>
        </div>
        
    )
}

export default SignIn