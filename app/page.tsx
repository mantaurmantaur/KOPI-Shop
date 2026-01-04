"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const { data } = await supabase.auth.getSession();
  // if (data.session) {
  //   redirect("/login");
  // }
  redirect("/login");
}
