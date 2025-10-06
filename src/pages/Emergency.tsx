import React, { useState } from "react";
import { Link } from "react-router-dom";

const Emergency: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    units: "",
    city: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Emergency request submitted!\n\nName: ${formData.name}\nBlood Type: ${formData.bloodType}\nUnits: ${formData.units}\nCity: ${formData.city}\nContact: ${formData.contact}\n\nOur team will contact you soon.`
    );
    setFormData({ name: "", bloodType: "", units: "", city: "", contact: "" });
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center px-4 py-16">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 text-center">
        EMERGENCY BLOOD REQUEST
      </h1>
      <p className="text-slate-700 mb-12 text-center max-w-xl text-lg md:text-xl">
        Fill out the form below to urgently request blood. Our team will contact
        you immediately.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg transition-all hover:shadow-2xl"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
        </div>

        {/* Blood Type */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-slate-700">
            Blood Type
          </label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Units */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-slate-700">
            Units Required
          </label>
          <input
            type="number"
            name="units"
            value={formData.units}
            onChange={handleChange}
            required
            min={1}
            placeholder="Enter number of units"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-slate-700">
            City / Location
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Enter your city"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
        </div>

        {/* Contact */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-slate-700">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="10-digit number"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all"
        >
          Submit Request
        </button>
      </form>

      {/* Back Link */}
      <Link
        to="/"
        className="mt-6 text-red-600 font-semibold hover:underline text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Emergency;
