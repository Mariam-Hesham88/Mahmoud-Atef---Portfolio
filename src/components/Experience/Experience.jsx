import React, { useEffect, useRef } from 'react';
import style from './Experience.module.css';

export default function Experience() {
  const paragraphsRef = useRef([]);

  let work = [
  {
    id: 10,
    company: 'Zad',
    role: '.NET Backend Developer (Part-Time)',
    description:
      'Designed and implemented advanced backend features for an ERP system using .NET Core API following Domain-Driven Design (DDD) principles. Developed asynchronous communication via Event Handlers to improve scalability and decoupling, and managed recurring tasks and heavy background jobs with Hangfire to enhance performance and reliability.',
    start: 'Nov 2025',
    end: 'Present',
  },
  {
    id: 11,
    company: 'Z4U Solution',
    role: 'Software Engineer (Full-Time)',
    description:
      'Engineered and deployed backend solutions using .NET Core API, MVC, SQL Server, Identity Core, JWT, and Dapper. Worked within an N-Tier architecture applying the Repository Pattern and Unit of Work to ensure clean, maintainable, and scalable application structure.',
    start: 'Jun 2025',
    end: 'Present',
  },
  {
    id: 12,
    company: 'Route Academy',
    role: 'Full-Stack Trainee',
    description:
      'Conducted training sessions on full-stack development, covering both frontend and backend technologies, mentoring students on best practices and real-world project implementation.',
    start: 'Mar 2024',
    end: 'Jun 2025',
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.visible);
        }
      });
    }, { threshold: 0.3 });

    paragraphsRef.current.forEach(p => observer.observe(p));
  }, []);

  return (
    <section className='flex flex-wrap justify-center w-full pt-12 bg-background'>

      <div className="w-full p-12 md:w-[80%]">
        <h1 className='pt-2 pb-8 font-bold secondTitle text-primary'>Work Experience</h1>

        {work.map((w, i) => (
          <div key={w.id} className="relative mb-4 p-8 rounded-3xl border-[2px] border-[solid] border-black">
            <span className='absolute -translate-x-1/2 translate-y-1/2 icon'>
              <i class="fa-solid fa-bars text-[38px]"></i>
            </span>
            <h3 className='text-primary text-[28px] font-semibold ps-5 md:ps-1 '>{w.company} - {w.role}</h3>
            <p 
              ref={(el) => paragraphsRef.current[i * 2 + 1] = el}
              className={`${style.slideInLeft} paragraph text-smokey ps-5 md:ps-1`}>
              {w.start} - {w.end}
            </p>
            <p 
              ref={(el) => paragraphsRef.current[i * 2] = el}
              className={`${style.slideInLeft} paragraph ps-5 md:ps-1`}>
              {w.description}
            </p>
            
          </div>
        ))}
      </div>
    </section>
  );
}



