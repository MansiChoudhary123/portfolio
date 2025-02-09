import Card from "@/reusableComponents/Card";
import React from "react";

const Certifications = () => {
  const certificateCards = [
    {
      image: "/Images/internship.png",
      title: "Internship Certificate",
      description: "Software Developer Intern at Agbiz Technologies Pvt Ltd",
      link: "https://drive.google.com/file/d/1YQnvBGAQ9hpVOB7Cax3bqqDzUSgGKt33/view",
    },
    {
      image: "/Images/reactjs.png",
      title: "React.js Certificate",
      description: "CETPA Infotech Pvt Ltd",
      link: "https://drive.google.com/file/d/1Ep6O-awdvsLYcCoJ-61Qz1jEEGFUveIm/view",
    },
    {
      image: "/Images/sql-certificate.png",
      title: "SQL Intermediate Certificate",
      description: "HackerRank",
      link: "https://www.hackerrank.com/certificates/504a63aca6de",
    },
  ];

  return (
    <div className="mt-6 mx-32" id="certificates">
      <h1 className="text-amber-200 text-6xl font-semibold mt-32 ">
        Certifications
      </h1>
      <div className="flex justify-around gap-8 mt-16">
        {certificateCards.map((item, index) => (
          <div
            key={index}
            className="shadow-lg shadow-purple-600  rounded-lg hover:scale-110 transition transform duration-300"
          >
            <Card item={item} link={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
