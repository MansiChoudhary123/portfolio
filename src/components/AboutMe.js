"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GithubIcon } from "../../public/Assets/githubIcon";
import { LinkedinIcon } from "../../public/Assets/linkedinIcon";
import Skills from "./Skills";
import Journey from "./Journey";
const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("about"); // Default to About

  return (
    <div className="mt-28 px-32">
      <h1 className="text-amber-200 text-6xl font-semibold">About me</h1>
      {/* Navigation Links */}
      <div className="flex justify-around text-amber-200 text-md font-bold mt-20 border-b-2 border-amber-200 mb-8">
        <button
          onClick={() => setActiveSection("about")}
          className={`px-20 py-2 border-2 border-transparent hover:border-amber-200 rounded transition duration-300 ${
            activeSection === "about" ? "bg-amber-200 text-black" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveSection("skills")}
          className={`px-20 py-2 border-2 border-transparent hover:border-amber-200 rounded transition duration-300 ${
            activeSection === "skills" ? "bg-amber-200 text-black" : ""
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("journey")}
          className={`px-20 py-2 border-2 border-transparent hover:border-amber-200 rounded transition duration-300 ${
            activeSection === "journey" ? "bg-amber-200 text-black" : ""
          }`}
        >
          Journey
        </button>
        <button
          onClick={() => setActiveSection("social")}
          className={`px-20 py-2 border-2 border-transparent hover:border-amber-200 rounded transition duration-300 ${
            activeSection === "social" ? "bg-amber-200 text-black" : ""
          }`}
        >
          Social Media
        </button>
      </div>
      {/* Conditional Rendering */}
      {activeSection === "about" && (
        <div className="flex text-amber-200 text-md">
          <div>
            <img
              src="/Images/mansi-animation.svg"
              height={400}
              width={800}
              alt="girl image"
            />
          </div>
          <div className="mt-24">
            <ul className="space-y-4 text-lg">
              <li>
                My name is{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  Mansi
                </span>{" "}
                and I did{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  MCA
                </span>{" "}
                from{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  Teerthanker Mahaveer University, Moradabad.
                </span>
              </li>
              <li>
                I am proficient in various programming languages such as{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  C, C++, Java, Python, HTML, CSS, JavaScript, MongoDB.
                </span>
              </li>
              <li>
                I also have experience working with frameworks and libraries
                such as{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  NodeJS, ReactJS, Next.js.
                </span>
              </li>
              <li>
                Whenever possible, I also apply my passion for developing
                products with{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  Modern JavaScript Libraries and Frameworks.
                </span>
              </li>
              <li>
                In my free time, I enjoy learning new technologies and{" "}
                <span className="text-violet-500 font-semibold text-xl">
                  building new web technologies and products.
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeSection === "skills" && <Skills />}
      {activeSection === "journey" && <Journey />}
      {activeSection === "social" && (
        <div>
          <h1 className="text-white text-4xl font-bold text-center mb-10">
            Connect with me
          </h1>
          <div className="flex justify-evenly mt-16 pb-4">
            <Link
              href="https://github.com/MansiChoudhary123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="bg-amber-100 rounded-3xl size-40 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mansichoudharytmu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <LinkedinIcon className="bg-amber-100 rounded-3xl size-40 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
