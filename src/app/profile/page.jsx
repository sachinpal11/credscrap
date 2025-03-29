"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import Loading from "../components/Loading";

function Page() {
  const fetched = useRef(false);
  const [userData, setUserData] = useState({ name: "", email: "", worktype: "", state: "", address: "" })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/user/me");
        setUserData(res.data.user);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err.response || err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="pt-10 w-full h-[100vh] overflow-x-hidden relative px-4">
      {loading && <Loading />}
      <div className="w-full h-auto px-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="text-2xl text-green-400 font-semibold">
              CredScrap/{userData.name}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Page;
