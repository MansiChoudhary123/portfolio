import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const ProjectJourney = () => {
  const projectCards = [
    {
      title: "SCHOOL WEBSITE",
    },
    {
      title: "ONLINE VOTING SYSTEM",
    },
    {
      title: "ONLINE FOOD DELIVERY SYSTEM",
    },
    {
      title: "BLOG APPLICATION",
    },
    {
      title: "TASK MANAGEMENT",
    },
  ];
  return (
    <div className="mt-6 w-full  relative">
      <h1 className="text-white text-4xl font-bold text-center mb-10">
        Project Journey
      </h1>

      {/* Timeline */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {projectCards.map((card, index) => (
          <div key={index} className="relative w-full flex items-center mb-8">
            {/* Timeline Point (Icon) */}

            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-violet-800 text-orange-300 rounded-full   border-4 border-white z-10">
              <FaGraduationCap size={22} />
            </div>

            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 1 }}
              className={`w-[45%]  p-6 bg-violet-800 text-orange-300 border border-b-4 rounded-lg shadow-lg ${
                index % 2 === 0 ? "ml-auto mr-0 " : "mr-auto ml-0 "
              }`}
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {card.title}
              </h3>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectJourney;
