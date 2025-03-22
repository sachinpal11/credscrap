import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import User from "@/models/userModel";
import connectDB from "@/dbconfig/dbconfig";

export async function POST(req) {
  try {
    await connectDB(); // Ensure DB is connected

    const { name, email, worktype, state, address, password } = await req.json();

    if (!name || !email || !worktype || !state || !address || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      worktype,
      state,
      address,
      password: hashedPassword, // Save hashed password
    });

    await newUser.save();
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
