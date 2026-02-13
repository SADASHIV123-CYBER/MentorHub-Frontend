// import { useState } from "react"
// import Input from "../../Input/Input"
// import { client } from "../../../Api/client";
// import React from "react";
// import Button from "../../Button/Button";

// function SignUp({onSuccess}) {

//     const [form, setForm] = useState({
//         fullName: '',
//         userName: '',
//         email: '',
//         password: '',
//         mobileNumber: '',
//         profilePicture: ''
//     });

//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);


// //   const handleChange = (e) => {
// //     const { name, value, type, files } = e.target;
// //     // Handle file input separately if needed, for this example we'll assume the Input component handles file logic appropriately
// //     const newValue = type === 'file' ? files[0] : value;
// //     setForm(prevForm => ({
// //       ...prevForm,
// //       [name]: newValue,
// //     }));
// //   };

//     const handleChange = (e) => {
//         const {name, value, type, files} = e.target;

//         const newValue = type === 'file' ? files[0] : value;

//         setForm(prevForm => ({
//             ...prevForm,
//             [name]: newValue
//         }))
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         setLoading(true);

//         try {
//             const res = await client.post("user/register", {
//                 fullName: form.fullName,
//                 userName: form.userName,
//                 email: form.email,
//                 password: form.password,
//                 mobileNumber: form.mobileNumber,
//                 profilePicture: form.profilePicture

//             });

//             console.log("res:", res);

//             onSuccess?.()
            
//         } catch (err) {
//             console.log(err);
            
//         }
//     }


//     return(
//         <div className="h-130 w-120 gap-5 " >
//             <div>
//                 <h1>Create your account</h1>
//             </div>

//             <form onSubmit={handleSubmit} className="flex" >
//                 <div className="flex  flex-wrap">
//                     <Input 
//                         label="Full name"
//                         name="full name"
//                         type="text"
//                         required={true}
//                         onChange={handleChange}
//                     />

//                     <Input 
//                         label="User name"
//                         name="user name"
//                         type="text"
//                         required={true}
//                         onChange={handleChange}
//                     />


//                     <Input 
//                         label="Email"
//                         name="email"
//                         type="email"
//                         required={true}
//                         onChange={handleChange}
//                     />

//                     <Input 
//                         label="Password"
//                         name="password"
//                         type="password"
//                         required={true}
//                         onChange={handleChange}
//                     />

//                     <Input 
//                         label="Mobile number"
//                         name="mobile number"
//                         type="number"
//                         onChange={handleChange}
//                     />

//                     <Input 
//                         label="Profile picture"
//                         name="profile picture"
//                         type="file"
//                         onChange={handleChange}
//                     />

//                 </div>
//             </form>

//             <Button text={loading ? "signing in..." : "Sign In" } styleType="special-btn" className="w-full h-12 mt-8 " type="submit" />
//         </div>
//     )
// }

// export default SignUp


import React, { useState, useEffect, useRef } from "react";
import Input from "../../Input/Input.jsx";
import { client } from "../../../Api/client.js";
import Button from "../../Button/Button.jsx";

function SignUp({ onSuccess }) {

  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
    profilePicture: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // await client.post("/user/register", form);

      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("userName", form.userName);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("mobileNumber", form.mobileNumber);
      // formData.append("profilePicture", form.profilePicture)

      if(form.profilePicture) {
        formData.append("profilePicture", form.profilePicture)
      }

      const res = await client.post("/user/register", form);

      console.log("res:", res);
      



      onSuccess?.();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white h-120 w-120 p-10 m-auto">

      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl">Create your account</h2>
        <p className="text-gray-400 mt-5">
          Join MentorHub and start learning
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-7">
        <div className="grid grid-cols-2 gap-2 p-2">

          <Input
            label="Full Name"
            name="fullName"
            onChange={handleChange}
            required
            ref={inputRef}
            className="h-8"
          />

          <Input
            label="Username"
            name="userName"
            onChange={handleChange}
            required
            className="h-8"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="h-8"

          />

          <Input
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            onChange={handleChange}
            className="h-8"

          />

          {/* Full width fields */}
          <div className="col-span-2">
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            className="h-8"

            />
          </div>

          <div className="col-span-2">
            <Input
              label="Profile Picture"
              type="file"
              name="profilePicture"
              onChange={handleChange}
            className="h-8"

            />
          </div>
        </div>

        {error && <p className="text-red-400 mt-2">{error}</p>}

        <Button
          text={loading ? "Creating account..." : "Sign Up"}
          styleType="special-btn"
          className="w-full h-12 mt-5"
          type="submit"
          
        />
      </form>

      {/* <div className="mt-3 text-center">
        <span className="text-gray-400">Already have an account?</span>{" "}
        <span className="text-gray-600 cursor-pointer">Sign in</span>
      </div> */}
    </div>
  );
}

export default SignUp;
