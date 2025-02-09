"use client"; // Ensures smooth scrolling works properly

import { useRouter } from "next/navigation";

const Topbar = () => {
  const router = useRouter();

  const handleScroll = (e) => {
    e.preventDefault();

    // Check if we are already on the homepage
    if (window.location.pathname !== "/") {
      router.push("/#projects"); // Navigates to home, then scrolls
    } else {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black text-amber-100 shadow-lg">
      <div className="max-w-7xl mx-auto py-6 flex items-center justify-between">
        <a href="/" className="text-3xl font-bold tracking-wide">
          MANSI
        </a>

        <div className="flex space-x-8 text-md font-medium">
          <a href="/" className="hover:underline">
            Home
          </a>

          {/* Smooth Scroll to Projects */}
          <a
            href="#projects"
            className="hover:underline cursor-pointer"
            onClick={handleScroll}
          >
            Projects
          </a>

          <a href="/" className="hover:underline">
            Resume
          </a>
          <a href="#certificates" className="hover:underline">
            Certifications
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
