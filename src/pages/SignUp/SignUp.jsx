import React, { useState, useEffect, useRef } from "react";
import Input from "../../components/Input/Input.jsx";
import { client } from "../../Api/client.js";
import Button from "../../components/Button/Button.jsx";

function SignUp({ onSuccess }) {
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [emailForOtp, setEmailForOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  const [resending, setResending] = useState(false);

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
  }, [step]);

  useEffect(() => {
    if (step !== "otp") return;
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        if (form[key]) formData.append(key, form[key]);
      });

      const res = await client.post("/user/register", formData);

      setEmailForOtp(res.data.email || form.email);
      setTimeLeft(120);
      setStep("otp");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    setLoading(true);

    try {
      await client.post("/user/verify-otp", {
        email: emailForOtp,
        otp,
      });

      onSuccess?.();
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setResending(true);

    try {
      await client.post("/user/resend-otp", { email: emailForOtp });
      setTimeLeft(120);
    } catch {
      setError("Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="bg-white h-120 w-120 p-10 m-auto">
      {step === "form" && (
        <>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl">Create your account</h2>
            <p className="text-gray-400 mt-5">
              Join MentorHub and start learning
            </p>
          </div>

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
              text={loading ? "Sending OTP..." : "Create Account"}
              styleType="special-btn"
              className="w-full h-12 mt-5"
              type="submit"
            />
          </form>
        </>
      )}

      {step === "otp" && (
        <div className="flex flex-col items-center gap-4 mt-10">
          <h2 className="text-xl font-bold">Verify OTP</h2>

          <p className="text-gray-500 text-sm text-center">
            Enter the OTP sent to <br />
            <span className="font-semibold">{emailForOtp}</span>
          </p>

          <Input
            ref={inputRef}
            label="OTP"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="text-center tracking-widest"
          />

          {error && <p className="text-red-400">{error}</p>}

          <div className="text-sm text-gray-600">
            {timeLeft > 0 ? (
              <p>
                Resend OTP in{" "}
                <span className="font-semibold">{formatTime()}</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resending}
                className="text-green-600 font-semibold hover:underline"
              >
                {resending ? "Resending..." : "Resend OTP"}
              </button>
            )}
          </div>

          <Button
            text={loading ? "Verifying..." : "Verify OTP"}
            styleType="special-btn"
            className="w-full h-12"
            onClickHandler={handleVerifyOtp}
          />
        </div>
      )}
    </div>
  );
}

export default SignUp;
