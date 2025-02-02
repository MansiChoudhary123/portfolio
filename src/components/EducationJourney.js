import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const EducationJourney = () => {
  const educationCards = [
    {
      title: "10th",
      description: "VAISHNO GIRLS INTER COLLEGE, AMROHA",
      content:
        "Studied here from Class 4 to 12th and gained 82% in my 10th Examination.",
    },
    {
      title: "12th",
      description: "VAISHNO GIRLS INTER COLLEGE, AMROHA",
      content:
        "Studied here from Class 4 to 12th and gained 84% in my 12th Examination.",
    },
    {
      title: "Graduation",
      description: "D.A.V. P.G. COLLEGE, DEHRADUN",
      content: "Studied Bachelor of Science and gained 72% in my graduation.",
    },
    {
      title: "Post Graduation",
      description: "TEERTHANKER MAHAVEER UNIVERSITY, MORADABAD",
      content: "Studied Masters of Computer Application and gained 9 SGPA.",
    },
  ];
  return (
    <div className="mt-6 w-full  relative">
      <h1 className="text-white text-4xl font-bold text-center mb-10">
        Educational Journey
      </h1>

      {/* Timeline */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {educationCards.map((card, index) => (
          <div key={index} className="relative w-full flex items-center mb-8">
            {/* Timeline Point (Icon) */}

            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-violet-800 text-orange-300  rounded-full   border-4 border-white z-10">
              <FaGraduationCap size={22} />
            </div>

            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 1 }}
              className={`w-[45%]  p-6 bg-violet-800 text-orange-300 rounded-lg  border border-b-4 shadow-lg ${
                index % 2 === 0 ? "ml-auto mr-0 " : "mr-auto ml-0 "
              }`}
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {card.title}
              </h3>
              <p className="text-lg font-bold text-center mb-2">
                {card.description}
              </p>
              <p className="font-semibold text-center">{card.content}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationJourney;
