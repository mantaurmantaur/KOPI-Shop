"use client";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    redirect("/login");
  }
}
