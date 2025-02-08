import Link from "next/link";
import React from "react";
import { GithubIcon } from "../../public/Assets/githubIcon";

const Projects = () => {
  const projectCards = [
    {
      image: "/images/Voting.png",
      title: "Online Voting System",
      description:
        "A MERN-based voting platform with real-time election results.I developed this project using MERN technology. For frontend I used Reactjs,css,Apex chat library and for backend I used Nodejs, Expressjs and Mongodb for database.By this platform user can cast their vote from anywhere. And can see real time election result in graphical and tabular format.",
      link: "https://github.com/MansiChoudhary123/onlineVoting-frontend",
    },
    {
      image: "/images/blog.png",
      title: "Blog Application",
      description:
        "I developed a blog platform where users can create, edit, and view blogs using the MERN technology stack. For the frontend, I used React.js,Tailwind CSS,and a Rich Text Editor.For backend using Node.js,Express.js,and MongoDB.This platform allows users to explore blog posts, create their own content, and manage their posts by editing or deleting them as per their requirements.",
      link: "https://github.com/MansiChoudhary123/blog-App",
    },
    {
      image: "/images/portfolio.png",
      title: "Personal Portfolio",
      description:
        "A Portfolio Website designed to showcase my work and projects, built using Next.js and Tailwind CSS. This platform provides a professional and interactive way to highlight my skills, experience, and accomplishments, offering a seamless user experience with a modern and responsive design.",
      link: "https://github.com/MansiChoudhary123/portfolio",
    },
    {
      image: "/images/food.png",
      title: "Food Delivery Application",
      description:
        "A Food Ordering Platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform enables users to conveniently order food and have it delivered directly to their doorstep. Additionally, the platform supports restaurants in boosting their revenue, sales, and marketing efforts by reaching a wider customer base. ",
      link: "https://github.com/MansiChoudhary123/food_delivery_app",
    },
    {
      image: "/images/food.png",
      title: "Movie Reviewer",
      description: "A web app for reviewing and rating movies.",
      link: "https://github.com/MansiChoudhary123/Movie-Reviewer",
    },
    {
      image: "/images/food.png",
      title: "Task Management",
      description:
        "A Task Management Tool designed for organizing daily activities. This project was developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to create tasks, track their progress, and categorize them into Pending, In Progress, and Completed sections. Additionally, users can monitor their overall performance related to task completion.",
      link: "https://www.hackerrank.com/certificates/504a63aca6de",
    },
    {
      image: "/images/food.png",
      title: "School Website",
      description:
        "A fully functional school website with an admin panel.I developed this web application using HTML,CSS,JAVASCRIPT.",
      link: "https://www.hackerrank.com/certificates/504a63aca6de",
    },
  ];

  return (
    <div className="mt-40 mx-32">
      <h1 className="text-amber-200 text-6xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-3 gap-8 mt-20">
        {projectCards.map((item, index) => (
          <div
            key={index}
            className=" w-80 h-80 border-2 border-amber-300 rounded-md p-2 bg-violet-500 flex flex-col items-center"
          >
            <h1 className="pt-4 text-amber-300 text-xl font-semibold text-center">
              {item.title}
            </h1>

            {/* Image Wrapper with Hover Effect */}
            <div className=" w-full h-52 p-4 overflow-hidden relative">
              {/* Image */}
              <img
                src={item.image}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />

              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-sm font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="p-2 text-center">{item.description}</p>
              </div>
            </div>

            {/* GitHub Link */}
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mt-4 bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-amber-200 hover:shadow-[0_0_10px_10px_rgb(255,224,130)]" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
