"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
<<<<<<< Updated upstream
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);
=======
  // const { data } = await supabase.auth.getSession();
  // if (data.session) {
  //   redirect("/login");
  // }

  redirect("/login");
>>>>>>> Stashed changes
}
