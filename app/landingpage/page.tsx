"use client";

import Header from "@/components/landingpageComponents/Header";
import Home from "@/components/landingpageComponents/Home";
import Product from "@/components/landingpageComponents/Products";
import About from "@/components/landingpageComponents/About";

export default function landingpage() {
  return (
    <div className="min-h-screen bg-lyellow w-full sm:items-center sm:justify-center sm:flex flex-col">
      {/* bleed */}

      <header className="fixed top-0 left-0 w-full z-50 h-20 mb-30 px-30 bg-lyellow">
        <Header />
      </header>
      <div className="px-30 mt-10">
        <section id="home" className="mt-10">
          <Home />
        </section>
        <section id="products">
          <Product />
        </section>
      </div>

      <section
        className="w-screen min-h-screen bg-[url('/beans.jpeg')] bg-cover bg-center mt-20 relative"
        id="about"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#f5efe6]/80 via-[#f5efe6]/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-10 py-20">
          <About />
        </div>
      </section>
    </div>
  );
}
