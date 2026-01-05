"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardHeader() {
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("username, role") //column name sa table
        .eq("id", session.user.id)
        .single(); //expects only one result

      if (error) console.error(error.message);
      else {
        setUsername(profile.username);
        setRole(profile.role);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>
        Welcome, {username || "User"}, you are a {role || "monkey"}!
      </h1>
    </div>
  );
}
