"use client";

import { useState, useEffect } from "react";
import Topbar from "@/components/Topbar";
import { GithubIcon } from "../../public/Assets/githubIcon";
import { LinkedinIcon } from "../../public/Assets/linkedinIcon";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  const profileArray = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [currentProfile, setCurrentProfile] = useState("");
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const typeWriter = () => {
      let profileText = profileArray[profileIndex];
      let currentText = "";
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        currentText += profileText[charIndex];
        setCurrentProfile(currentText);
        charIndex += 1;

        if (charIndex === profileText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setProfileIndex((prev) => (prev + 1) % profileArray.length); // Loop back to the start
          }, 1000); // Wait 1 second before showing the next profile
        }
      }, 100); // Adjust typing speed (100ms between characters)
    };

    typeWriter();
  }, [profileIndex]);

  return (
    <div className="bg-black ">
      <main>
        <Topbar />
        <div className="flex mt-12">
          <div className="w-[60%]  pl-32 ">
            <h1 className="text-6xl font-semibold text-amber-100 mb-6 tracking-widest">
              Hi There!
            </h1>

            <h1 className="text-6xl font-semibold text-violet-300 mb-6 tracking-widest">
              <span className="text-6xl font-semibold text-amber-100">I'M</span>{" "}
              MANSI
            </h1>

            <h1 className="text-6xl font-semibold text-violet-300 tracking-widest">
              {currentProfile}
            </h1>
            <div className="flex gap-6 mt-12 ">
              <Link
                href="https://github.com/MansiChoudhary123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mansichoudharytmu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <LinkedinIcon className="bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
              </Link>
            </div>
          </div>
          <div className="max-h-[400px] max-w-[300px] rounded-full">
            <img
              src="/Images/profile.jpeg"
              alt="Profile Image"
              className="rounded-full"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <AboutMe />
        <Certifications />
        <Projects  />
        <ContactMe />
      </main>
    </div>
  );
}
