"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return setError(error.message);
    router.push("/dashboard");
  };

  const handleClickRegister = async () => {
    router.push("/register");
  };

  const showPassword = () => {
    const x = document.getElementById("myPassword") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow w-80 items-center justify-center">
        <h1 className="text-xl font-bold mb-4 dark:text-gray-900">Login</h1>

        <input
          className="border border-black w-full p-2 mb-2 dark:text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password flex flex-col items-end gap-2">
          <input
            className="border border-black w-full p-2 dark:text-black"
            type="password"
            placeholder="Password"
            id="myPassword"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            id="togglePassword"
            className="text-sm text-blue-700 hover:underline mt-1"
            onClick={showPassword}
          >
            Show Password
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full py-2 mt-3 rounded cursor-pointer hover:bg-gray-900 mb-3"
        >
          Sign In
        </button>

        <a
          className="dark:text-black  text-sm hover:underline cursor-pointer mt-3 py-2"
          onClick={handleClickRegister}
        >
          Don't have an account?
        </a>
      </div>
    </div>
  );
}
