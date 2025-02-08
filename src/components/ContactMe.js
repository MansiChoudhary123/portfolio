import Link from "next/link";
import React from "react";
import { GithubIcon } from "../../public/Assets/githubIcon";
import { LinkedinIcon } from "../../public/Assets/linkedinIcon";
import { GmailIcon } from "../../public/Assets/gmailIcon";

const ContactMe = () => {
  return (
    <div className="mt-8 mx-32 ">
      <h1 className="text-amber-200 text-6xl font-semibold mt-32 ">
        Contact me
      </h1>
      <div className="mt-10 ">
        <Link
          href="https://github.com/MansiChoudhary123/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 mt-6"
        >
          <GithubIcon className="bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
          <h1 className="text-amber-100">
            https://github.com/MansiChoudhary123/
          </h1>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mansichoudharytmu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 mt-6"
        >
          {" "}
          <LinkedinIcon className="bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
          <h1 className="text-amber-100">
            https://www.linkedin.com/in/mansichoudharytmu/
          </h1>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mansichoudharytmu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 mt-6"
        >
          {" "}
          <GmailIcon className="bg-amber-100 rounded-full size-10 p-2 transition-all duration-300 hover:ring-4 hover:ring-violet-300 hover:shadow-[0_0_20px_20px_rgba(139,92,246,0.6)]" />
          <h1 className="text-amber-100">mansichoudhary244221@gmail.com</h1>
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
