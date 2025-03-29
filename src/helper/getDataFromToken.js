import jwt from "jsonwebtoken";
import { cookies } from "next/headers"; // Required for Next.js App Router

export const getDataFromToken = (req) => {
  try {

    const cookieToken = cookies().get("Token")?.value;
    const headerToken = req.headers.authorization?.split(" ")[1];

    const token = cookieToken || headerToken;

    if (!token) {
      console.error("Token not found in request");
      throw new Error("Token not found");
    }

    console.log("Token received:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return null;
  }
};
