import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import connectDB from "@/dbconfig/dbconfig";


export async function GET(req) {
  try {
    await connectDB(); // Connect to the database

    const data = await getDataFromToken(req);

    const user = await User.findById(data.id).select("-password").lean();
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
