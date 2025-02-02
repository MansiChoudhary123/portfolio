import Card from "@/reusableComponents/Card";
import React from "react";

const Certifications = () => {
  const certificateCards = [
    {
      image: "/images/internship.png",
      title: "Internship Certificate",
      description: "Software Developer Intern at Agbiz Technologies Pvt Ltd",
      link: "https://drive.google.com/file/d/1YQnvBGAQ9hpVOB7Cax3bqqDzUSgGKt33/view",
    },
    {
      image: "/images/reactjs.png",
      title: "React.js Certificate",
      description: "CETPA Infotech Pvt Ltd",
      link: "https://drive.google.com/file/d/1Ep6O-awdvsLYcCoJ-61Qz1jEEGFUveIm/view",
    },
    {
      image: "/images/HackerRank.avif",
      title: "SQL Intermediate Certificate",
      description: "HackerRank",
      link: "https://www.hackerrank.com/certificates/504a63aca6de",
    },
  ];

  return (
    <div className="mt-16 mx-32">
      <h1 className="text-amber-200 text-6xl font-semibold mb-6">
        Certifications
      </h1>
      <div className="flex justify-evenly pt-12">
        {certificateCards.map((item, index) => (
          <Card item={item} link={item.link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
