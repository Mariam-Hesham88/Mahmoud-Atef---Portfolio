import React from "react";
import style from "./Skills.module.css";

let backend = [
  "sql",
  "c#",
  "linq",
  "mvc",
  "Entity Framework Core",
  "Web APIs",
  "ASP.NET Core",
  "Identity Core",
  "Hangfire",
  "SignalR",
];
let frontend = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "Bootstrap",
  "TailwindCSS",
  "TypeScript",
  "Angular",
  "Responsive Design",
];

let databases = [
  "MSSQL (SQL Server)",
  "Dapper",
  "Data Structures and Algorithms",
];
let toolsVersionControl = [
  "git",
  "git-Hub",
  "JWT",
  "SQL Tools",
  "Agile/Scrum Methodologies",
];
let softSkills = [
  "Communication Skills",
  "Research",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Adaptability & Continuous Learning",
  "Time Management",
  "Attention to Detail",
  "Creativity & Design Sense",
  "Leadership & Initiative",
  "Critical Thinking",
];

export default function Skills() {
  return (
    <>
      <section className="flex flex-wrap p-12 min-h-lvh bg-misty">
        <h1 className="w-full pb-8 font-bold text-center secondTitle text-primary">
          Technical Skills
        </h1>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <h3 className=" text-smokey text-[24px] font-semibold py-4">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
            {backend.map((backend, index) => (
              <span
                key={index}
                className="cr capitalize text-center rounded-lg bg-secondary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]"
              >
                {backend}
              </span>
            ))}
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <h3 className=" text-smokey text-[24px] font-semibold py-4">
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
            {databases.map((databases, index) => (
              <span
                key={index}
                className="cr capitalize text-center rounded-lg bg-secondary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]"
              >
                {databases}
              </span>
            ))}
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <h3 className=" text-smokey text-[24px] font-semibold py-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
            {frontend.map((frontend, index) => (
              <span
                key={index}
                className="cr capitalize text-center rounded-lg bg-secondary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]"
              >
                {frontend}
              </span>
            ))}
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <h3 className=" text-smokey text-[24px] font-semibold py-4">
              Tools & Version Control
            </h3>
            <div className="flex flex-wrap gap-2">
            {toolsVersionControl.map((tool, index) => (
              <span
                key={index}
                className="cr capitalize text-center rounded-lg bg-secondary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]"
              >
                {tool}
              </span>
            ))}
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="p-6">
            <h3 className=" text-smokey text-[24px] font-semibold py-4">
              Soft-Skills
            </h3>
            <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="cr capitalize text-center rounded-lg bg-secondary text-white py-2 px-4 hover:scale-110 transition-all duration-[.3s]"
              >
                {skill}
              </span>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
