import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../Api/client";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function CreateMentorProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    headline: "",
    bio: "",
    skills: "",
    experience: "",
    pricePerSession: "",
    languages: "",
  });

  const [availability, setAvailability] = useState([
    { day: "", slots: "" }
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleAvailabilityChange(index, field, value) {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  }

  function addAvailability() {
    setAvailability([...availability, { day: "", slots: "" }]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        headline: form.headline,
        bio: form.bio,
        skills: form.skills.split(",").map((s) => s.trim()),
        languages: form.languages
          ? form.languages.split(",").map((l) => l.trim())
          : [],
        experience: Number(form.experience),
        pricePerSession: Number(form.pricePerSession),
        availability: availability.map((a) => ({
          day: a.day,
          slots: a.slots.split(",").map((s) => s.trim())
        }))
      };

      await client.post("mentor/create", payload);
      navigate("/mentor/dashboard");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dde6e1] px-4 mt-7">
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

          <Input
            type="text"
            name="headline"
            value={form.headline}
            onChange={handleChange}
            placeholder="Senior MERN Developer"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Tell students about yourself"
          />

          <Input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="React, Node, MongoDB"
          />

          <Input
            type="text"
            name="languages"
            value={form.languages}
            onChange={handleChange}
            placeholder="English, Hindi"
          />

          <Input
            type="number"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Years of experience"
          />

          <Input
            type="number"
            name="pricePerSession"
            value={form.pricePerSession}
            onChange={handleChange}
            placeholder="Price per session"
          />

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Availability</h3>

            {availability.map((item, index) => (
              <div key={index} className="flex gap-3">

                <select
                  value={item.day}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "day", e.target.value)
                  }
                  className="border p-2 rounded w-1/3"
                >
                  <option value="">Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>

                <Input
                  type="text"
                  value={item.slots}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "slots", e.target.value)
                  }
                  placeholder="10:00, 11:00, 12:00"
                  className="flex-1"
                />

              </div>
            ))}

            <button
              type="button"
              onClick={addAvailability}
              className="text-blue-600 text-sm"
            >
              + Add Day
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            styleType="primary"
            className="w-full"
            text={loading ? "Creating..." : "Create Profile"}
          />

        </form>
      </div>
    </div>
  );
}

export default CreateMentorProfile;