"use client";

import Header from "@/components/landingpageComponents/Header";
import Home from "@/components/landingpageComponents/Home";
import Product from "@/components/landingpageComponents/Products";
import About from "@/components/landingpageComponents/About";

export default function landingpage() {
  return (
    <div className="landing-page-container bg-lyellow min-h-screen w-full px-30 mt-0">
      <Header />
      <Home />
      <Product />
      <About />
    </div>
  );
}
