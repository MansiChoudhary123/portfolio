import Card from "@/reusableComponents/Card";
import React, { useState } from "react";

import EducationJourney from "./EducationJourney";
import TechnicalJourney from "./TechnicalJourney";
import ProjectJourney from "./ProjectJourney";

const Journey = () => {
  const [activeJourney, setActiveJourney] = useState("educational");

  return (
    <div className="mt-20 relative flex flex-col items-center">
      {/* Button Selection */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setActiveJourney("educational")}
          className="text-white bg-violet-800 px-4 py-2 rounded-md"
        >
          Educational Journey
        </button>
        <button
          onClick={() => setActiveJourney("technical")}
          className="text-white bg-violet-800 px-4 py-2 rounded-md"
        >
          Technical Journey
        </button>
        <button
          onClick={() => setActiveJourney("project")}
          className="text-white bg-violet-800 px-4 py-2 rounded-md"
        >
          Project Journey
        </button>
      </div>

      {activeJourney === "educational" && <EducationJourney />}
      {activeJourney === "technical" && <TechnicalJourney />}
      {activeJourney === "project" && <ProjectJourney />}
    </div>
  );
};

export default Journey;
