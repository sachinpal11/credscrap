"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import bgImg from '@/assets/bgimage.jpg'
import Loading from "../components/Loading";
export default function Page() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/user/login", form);
      console.log(res.data);
      router.push('/profile');
      setLoading(false);
    } catch (error) {
      console.log(error.response?.data || "Error occurred");
    }
  };

  return (
    <div className="w-full relative h-screen flex items-center justify-center">
      {loading && <Loading />}
      <img src={'https://theunitedindian.com/images/electronic-waste-disposal3.jpg'} className="w-full h-full absolute z-[-1] opacity-10" alt="" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />
          <button className="w-full bg-green-500 p-2 rounded hover:bg-green-600">
            Login
          </button>
          <p className="text-center mt-4">
            Not Signed Up? <Link href="/signup" className="text-green-400">signUp</Link>
          </p>
        </form>

      </motion.div></div>
  );
}
