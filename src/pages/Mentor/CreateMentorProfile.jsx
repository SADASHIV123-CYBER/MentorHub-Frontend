import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../Api/client";
import Input from "../../components/Input/Input";
import  Button from "../../components/Button/Button"

function CreateMentorProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    headline: "",
    bio: "",
    skills: "",
    experience: "",
    pricePerSession: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
      };

      await client.post('mentor/create', payload);

      navigate("/mentor/dashboard");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg[#dde6e1] px-4 mt-7 ">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Mentor Profile
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Tell students about yourself..."
            />

          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Skills (comma separated)
            </label>

            <Input 
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              required
              className="w-full  p-3 "
              placeholder="React, Node, MongoDB"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Experience
            </label>
            {/* <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="2 years teaching MERN"
            /> */}

            <Input 
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className="w-full  p-3 "
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price per hour (₹)
            </label>
            <Input
              type="number"
              name="pricePerSession"
              value={form.pricePerSession}
              onChange={handleChange}
              required
              className="w-full  p-3 "
              placeholder="500"
            />
          </div>

          {/* Button */}
          {/* <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Create Profile"}
          </button> */}

          <Button 
            type="submit"
            disabled={loading}
            styleType="primary" 
            className="w-full rounded-lg font-semibold  "
            text={loading ? "Creating...": "Create Profile"}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateMentorProfile