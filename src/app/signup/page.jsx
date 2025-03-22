"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    worktype: "Individual", // Default selection
    state: "",
    address: "",
    password: "",
  });

  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "New Delhi",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/signup", form);
      console.log(res.data);
      router.push('/login');
    } catch (error) {
      console.log(error.response?.data || "Error occurred");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />

          {/* Work Type Selection (Individual / Organization) */}
          <div className="flex justify-between items-center bg-gray-800 border border-gray-700 p-2 rounded">
            <span
              className={`cursor-pointer px-3 py-1 rounded ${form.worktype === "Individual" ? "bg-green-500 text-white" : "text-gray-400"
                }`}
              onClick={() => setForm({ ...form, worktype: "Individual" })}
            >
              Individual
            </span>
            <span
              className={`cursor-pointer px-3 py-1 rounded ${form.worktype === "Organization" ? "bg-green-500 text-white" : "text-gray-400"
                }`}
              onClick={() => setForm({ ...form, worktype: "Organization" })}
            >
              Organization
            </span>
          </div>

          {/* State Dropdown */}
          <select
            name="state"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
            value={form.state}
          >
            <option value="" disabled>Select your state</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>

          {/* Address Field */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button className="w-full bg-green-500 p-2 rounded hover:bg-green-600">
            Sign Up
          </button>

          {/* Already Signed Up? Login Link */}
          <p className="text-center mt-4">
            Already signed up? <Link href="/login" className="text-green-400">Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
