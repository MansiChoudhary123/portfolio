import React, { useState } from "react";

const Skills = () => {
  const [activeSkills, setActiveSkills] = useState("technical");
  return (
    <div className="mt-20">
      <div className="flex gap-4 justify-center">
        <button
          className="text-white bg-violet-800 px-4 py-2 rounded-md
        "
          onClick={() => setActiveSkills("technical")}
        >
          Technical Skill
        </button>
        <button
          className="text-white bg-violet-800 px-4 py-2 rounded-md"
          onClick={() => setActiveSkills("personal")}
        >
          Personal Skill
        </button>
      </div>
      {activeSkills === "technical" && (
        <div className="mt-6">
          <h1 className="text-white text-4xl font-bold text-center mb-10">
            Technical Skills
          </h1>

          <div className="grid grid-cols-3 gap-16 place-items-center">
            <span className="text-6xl text-orange-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-orange-300">
              ReactJS
            </span>
            <span className="text-6xl text-green-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-green-300">
              HTML
            </span>
            <span className="text-6xl text-blue-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-blue-300">
              CSS
            </span>

            <span className="text-5xl text-blue-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-blue-300">
              Tailwind CSS
            </span>
            <span className="text-5xl text-red-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-red-300">
              Node.js
            </span>
            <span className="text-5xl text-green-200 font-semibold hover:scale-110 transition transform duration-300 hover:text-green-100">
              Express.js
            </span>

            <span className="text-6xl text-pink-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-pink-300">
              JavaScript
            </span>
            <span className="text-6xl text-green-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-green-300">
              C
            </span>
            <span className="text-6xl text-orange-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-orange-300">
              C++
            </span>
          </div>
        </div>
      )}
      {activeSkills === "personal" && (
        <div className="mt-6">
          <h1 className="text-white text-4xl font-bold text-center mb-10">
            Personal Skills
          </h1>

          <div className="grid grid-cols-3 gap-16 place-items-center">
            <span className="text-4xl text-orange-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-orange-300">
              Communication Skills
            </span>
            <span className="text-4xl text-green-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-green-300">
              Project Management
            </span>
            <span className="text-4xl text-blue-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-blue-300">
              Problem Solving
            </span>

            <span className="text-4xl text-blue-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-blue-300">
              Analytical Abilities
            </span>
            <span className="text-4xl text-red-400 font-semibold hover:scale-110 transition transform duration-300 hover:text-red-300">
              Organization
            </span>
            <span className="text-4xl text-green-200 font-semibold hover:scale-110 transition transform duration-300 hover:text-green-100">
              Creativity
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
