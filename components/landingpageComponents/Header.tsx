import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-container flex flex-row items-center justify-between">
      {/* logo */}
      <section className="logo-section flex items-center">
        <Image
          src="/logo.png"
          alt="Pantry App Logo"
          // fill
          priority
          height={100}
          width={180}
          className="object-cover"
        />
      </section>
      {/* navigation menu */}
      <nav className="navigation-menu flex space-x-12 bg-lbrown py-4 px-40 rounded-xl">
        <a
          href="#home"
          className="nav-link text-lyellow font-semibold font-poppins hover:underline"
        >
          Home
        </a>
        <a
          href="#products"
          className="nav-link text-lyellow font-poppins font-semibold hover:underline"
        >
          Products
        </a>
        <a
          href="#about"
          className="nav-link text-lyellow font-poppins font-semibold hover:underline"
        >
          About
        </a>
        <a
          href="#contact"
          className="nav-link text-lyellow font-poppins font-semibold hover:underline"
        >
          Contact
        </a>
      </nav>
      {/* call to action button */}
      <Link href="/login">
        <button className="bg-lyellow text-dbrown font-semibold py-4 border border-dbrown px-6 rounded-xl hover:bg-lbrown hover:text-lyellow transition duration-300 cursor-pointer font-poppins">
          Sign In
        </button>
      </Link>
    </div>
  );
}
