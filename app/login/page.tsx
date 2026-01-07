"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    let email = identifier;

    if (!identifier.includes("@")) {
      const { data, error } = await supabase
        .from("profiles")
        .select("email")
        .eq("username", identifier)
        .single(); // returns one object

      if (error || !data) {
        setError("Username not found");
        return;
      }

      email = data.email;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      return;
    }

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
    <div className="min-h-screen bg-lyellow bg-opacity-50 flex items-center justify-center">
      <div className="bg-dbrown p-6 rounded-lg shadow w-80 items-center justify-center">
        <h1 className="text-xl font-bold mb-4 dark:text-lyellow font-poppins text-center">
          Login
        </h1>

        <input
          className="border border-lyellow  w-full p-2 mb-2 dark:text-lyellow rounded-sm focus:outline-lyellow"
          placeholder="Email"
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <div className="password flex flex-col items-end gap-2">
          <input
            className="border border-lyellow focus:outline-dbrown  rounded-sm w-full p-2 dark:text-lyellow"
            type="password"
            placeholder="Password"
            id="myPassword"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            id="togglePassword"
            className="text-sm text-rbrown cursor-pointer hover:underline mt-1"
            onClick={showPassword}
          >
            Show Password
          </button>
        </div>

        {error && <p className="text-lyellow text-sm">{error}!</p>}

        <button
          onClick={handleLogin}
          className="bg-lyellow text-lbrown w-full py-2 mt-3 rounded cursor-pointer hover:bg-lbrown hover:text-lyellow mb-3"
        >
          Sign In
        </button>

        <a
          className="dark:text-lyellow text-lyellow text-sm hover:underline cursor-pointer mt-3 py-2"
          onClick={handleClickRegister}
        >
          Don't have an account?
        </a>
      </div>
    </div>
  );
}
