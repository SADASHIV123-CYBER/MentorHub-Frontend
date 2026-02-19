import React, { useState, useRef, useEffect } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { client } from "../../Api/client.js";

function ForgotPassword({ onSuccess }) {
  const [step, setStep] = useState("email");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [timeLeft, setTimeLeft] = useState(120);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (step !== "otp" || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const getErrorMessage = (err, fallback) => {
    return (
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      fallback
    );
  };

  const handleSendOtp = async () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await client.post("/reset/forgot-password", { email });
      setStep("otp");
      setTimeLeft(120);
    } catch (err) {
      setError(getErrorMessage(err, "Failed to send OTP"));
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setResending(true);
    setError("");

    try {
      await client.post("/reset/forgot-password", { email });
      setTimeLeft(120);
    } catch (err) {
      setError(getErrorMessage(err, "Failed to resend OTP"));
    } finally {
      setResending(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setError("OTP is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await client.post("/reset/verify-reset-otp", { email, otp });
      setStep("reset");
    } catch (err) {
      setError(getErrorMessage(err, "Invalid OTP"));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword.trim()) {
      setError("New password is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await client.post("/reset/reset-password", {
        email,
        newPassword,
      });

      onSuccess?.();
    } catch (err) {
      setError(getErrorMessage(err, "Password reset failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white h-120 w-120 p-10 m-auto flex flex-col justify-center">
      {step === "email" && (
        <>
          <h2 className="text-xl font-bold text-center">Forgot Password</h2>

          <Input
            ref={inputRef}
            label="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <Button
            text={loading ? "Sending..." : "Send OTP"}
            styleType="special-btn"
            className="w-full mt-5"
            onClickHandler={handleSendOtp}
          />
        </>
      )}

      {step === "otp" && (
        <>
          <h2 className="text-xl font-bold text-center">Verify OTP</h2>

          <Input
            ref={inputRef}
            label="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="text-center tracking-widest"
            required
          />

          <div className="text-sm text-gray-500 text-center mt-2">
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

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <Button
            text={loading ? "Verifying..." : "Verify OTP"}
            styleType="special-btn"
            className="w-full mt-5"
            onClickHandler={handleVerifyOtp}
          />
        </>
      )}

      {step === "reset" && (
        <>
          <h2 className="text-xl font-bold text-center">Set New Password</h2>

          <Input
            ref={inputRef}
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <Button
            text={loading ? "Updating..." : "Reset Password"}
            styleType="special-btn"
            className="w-full mt-5"
            onClickHandler={handleResetPassword}
          />
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
