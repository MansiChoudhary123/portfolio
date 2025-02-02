import Link from "next/link";
import React from "react";
import { HomeIcon } from "../../public/Assets/homeIcon";

const Topbar = () => {
  return (
    <div>
      <nav className="bg-black text-amber-100 shadow-lg">
        <div className="max-w-7xl mx-auto  py-6 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold tracking-wide ">
            MANSI
          </Link>

          <div className="flex space-x-8 text-md font-medium">
            <Link href="/" className="hover:underline ">
              Home
            </Link>
            <Link href="/about" className="hover:underline ">
              Projects
            </Link>
            <Link href="/contact" className="hover:underline ">
              Resume
            </Link>
            <Link href="/contact" className="hover:underline ">
              Certifications
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
