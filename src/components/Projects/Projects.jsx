import React from 'react'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Projects() {

const projects = [
  {
    id: 11,
    title: 'School Management System',
    description:
      'Developed a full school management system covering students, employees, attendance, transportation, and asset management. Built using .NET Core MVC, Dapper, and SQL Server with a focus on efficient data handling and maintainable architecture.',
    technology: [
      '.NET Core MVC',
      'Dapper',
      'SQL Server',
      'Repository Pattern',
      'N-Tier Architecture'
    ],
    gitHubUrl: 'https://github.com/mahmoudattef/SchoolManagementSystem',
  },

  {
    id: 12,
    title: 'E-Commerce API',
    description:
      'Built a complete E-Commerce API with JWT authentication, authorization, and full CRUD operations. Implemented Entity Framework Core with SQL Server, Repository Pattern, and Unit of Work for clean, scalable, and maintainable code.',
    technology: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Authentication',
      'Repository Pattern',
      'Unit of Work'
    ],
    gitHubUrl: 'https://github.com/mahmoudattef/E-Commerce.Web',
  },

  {
    id: 13,
    title: 'E-Commerce MVC',
    description:
      'Developed an MVC web application using C# and N-Tier architecture to manage employees, departments, users, and roles. Implemented full CRUD operations, Identity, AutoMapper, and SQL Server for structured and scalable development.',
    technology: [
      '.NET MVC',
      'Entity Framework',
      'SQL Server',
      'AutoMapper',
      'Identity',
      'N-Tier Architecture'
    ],
    gitHubUrl: 'https://github.com/mahmoudattef/-C43-G03-MVC03',
  },
];


  function NextArrow({ onClick }) {
    return (
      <div onClick={onClick}
        className="absolute top-1/2 right-[-50px] md:right-[-80px] transform -translate-y-1/2 z-10 cursor-pointer 
                 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full 
                 shadow-lg hover:scale-110 transition-all duration-300">
        <FaArrowRight size={20} />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-[-50px] md:left-[-80px] transform -translate-y-1/2 z-10 cursor-pointer 
                 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full 
                 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaArrowLeft size={20} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 transition-all duration-300 bg-gray-400 rounded-full hover:bg-primary"></div>
    ),
  };

  return (
    <section className='w-[90%] mx-auto p-12 py-20 flex flex-wrap justify-center relative'>
      <h1 className='w-full pb-8 font-bold text-center secondTitle text-primary'>
        Featured Projects
      </h1>

      <div className="cards w-full sm:w-[80%] md:w-[70%] lg:w-[60%] relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="p-5">
              <div key={project.id} className="shadow-md item bg-misty border-[2px] border-primary rounded-t-2xl">
                <div className="p-6">
                  <h2 className='text-smothText font-semibold text-[20px] md:text-[24px] text-center'>
                    {project.title}
                  </h2>
                  <p className='text-primary text-[14px] md:text-[16px] text-center py-2'>{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 py-2">
                    {project.technology.map((tec, index) => (
                      <span key={index} className='px-3 py-1 text-sm text-white transition-all duration-300 rounded-lg bg-primary hover:scale-110'>
                        {tec}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-6 pt-3">
                    <a href={project.gitHubUrl} target='_blank' className="transition-all duration-300 text-secondary text-smothText hover:scale-125">
                      <i className="fa-brands fa-github text-[22px]"></i> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='flex justify-center w-full'>
        <a href='https://github.com/mahmoudattef?tab=repositories' target='_blank' className='text-white capitalize btn bg-primary'>
          View All Projects
        </a>
      </div>
    </section>
  );
}
