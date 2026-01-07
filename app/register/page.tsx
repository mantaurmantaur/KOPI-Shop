"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async () => {
    //insert sa auth ni supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });

    if (error) return error.message;

    router.push("/dashboard");
  };

  const handleClickLogin = async () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen  bg-lyellow flex items-center justify-center">
      <div className="bg-dbrown p-6 rounded-lg shadow w-80">
        <h1 className="text-xl font-bold mb-4 dark:text-lyellow font-poppins text-center">
          Register
        </h1>

        <input
          className="border border-lyellow w-full p-2 mb-2 dark:text-lyellow rounded-sm focus:outline-lyellow"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border border-lyellow w-full p-2 mb-2 dark:text-lyellow rounded-sm focus:outline-lyellow"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border border-lyellow w-full p-2 mb-2 dark:text-lyellow rounded-sm focus:outline-lyellow"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-lyellow text-lbrown w-full py-2 mt-3 rounded mb-3 hover:bg-lbrown hover:text-lyellow cursor-pointer"
        >
          Create Account
        </button>

        <a
          className="dark:text-lyellow text-lyellow text-sm hover:underline cursor-pointer mt-3 py-2"
          onClick={handleClickLogin}
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
}
