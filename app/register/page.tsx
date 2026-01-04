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
          username,
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h1 className="text-xl font-bold mb-4 dark:text-gray-900">Register</h1>

        <input
          className="border border-black w-full p-2 mb-2 dark:text-black"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border border-black w-full p-2 mb-2 dark:text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border border-black w-full p-2 mb-2 dark:text-black"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-black text-white w-full py-2 mt-3 rounded mb-3 hover:bg-gray-900 cursor-pointer"
        >
          Create Account
        </button>

        <a
          className="dark:text-black  text-sm hover:underline cursor-pointer mt-3 py-2 "
          onClick={handleClickLogin}
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
}
