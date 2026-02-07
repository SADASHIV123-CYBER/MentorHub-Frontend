import React, { useContext } from "react";
import { useState } from "react"
import Input from "../../Input/Input.jsx";
import { client } from "../../../Api/client.js"
import { AuthContext } from "../../../context/context.js";

function signIn() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext)


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const loginRes = client.post("/auth", form);
            console.log("loginRes: ",loginRes.status, loginRes.data);

            const verifyRes = client.get("/verify");
            console.log("verifyRes:", verifyRes.status , verifyRes.data);

            if(verifyRes?.data?.sucess && verifyRes.data.user) {
                setUser(verifyRes.data.user);
                navigate("/");
                return
            }

            setError(verifyRes?.data?.message || "Unable to verify user after login")
            
        } catch (error) {
            console.error("Login flow error:", err?.response || err);
            const serverMsg = err?.response?.data?.message;
            if (serverMsg) setError(serverMsg);
            else if (err?.response?.status === 401) setError("Unauthorized — invalid credentials or token.");
            else setError("Invalid email or password. Try again.");
            } finally {
            setLoading(false);
            }           
        }

    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h2>MentorHub</h2>
                <p>Sign in to your account</p>
            </div>

            <div>
                <Input 
                    label="email"
                    name="email"
                    placeholder=""
                    value={form.email}
                    onChange={handleChange}

                />
            </div>
        </form>
    )
}

export default signIn