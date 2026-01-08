"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface ProductGroup {
  category: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}

export default function DashboardHeader() {
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [data, setData] = useState<ProductGroup[]>([]);
  const [clicked, setClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("products_by_category")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="p-4">
      <h1>
        Welcome, {username || "User"}, you are a {role || "monkey"}!
      </h1>
      <div className="flex flex-row">
        {data.map((group) => (
          <section key={group.category}>
            <button
              className=" border m-3 items-center py-2 px-8 w-fit rounded-lg bg-lyellow text-dbrown cursor-pointer hover:scale-105 hover:shadow-lg transition-transform"
              onClick={() => {
                setClicked(true);
                setSelectedCategory(group.category);
              }}
            >
              <h2>{group.category}</h2>
            </button>
            {clicked && selectedCategory === group.category && (
              <div className="p-4 border border-lyellow rounded-lg bg-lbrown">
                {/* <h3 className="text-lg font-semibold mb-2">Items:</h3> */}
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id} className="mb-1">
                      {item.name} - ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
