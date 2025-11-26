import React from "react";
import mahmoud from "../../assets/images/mahmoud8.jpg";

export default function About() {
  let paragraph = [
    "Junior .NET Backend Developer with over one year of experience building scalable and well-structured backend systems using ASP.NET Core and SQL Server.",
    "Skilled in developing RESTful APIs, implementing JWT authentication, and applying Clean Architecture principles for maintainable and high-quality code.",
    "Experienced in working on both training projects and real client applications, delivering solutions that meet business requirements with reliability and performance.",
  ];
  return (
    <>
      <section className="flex justify-center py-20 bg-misty">
        <div className="flex flex-col-reverse items-center justify-center w-full gap-10 px-4 md:flex-row md:w-5/6 md:px-0">
          {/* Text Content */}
          <div className="flex flex-col w-full p-12 text-white bg-secondary md:rounded-s-3xl md:w-2/3">
            <h1 className="pb-8 text-3xl font-bold text-white secondTitle md:text-4xl">
              About Me
            </h1>

            {paragraph.map((p)=><div className="mt-8 border-b-2 border-white ps-4 rounded-bl-2xl border-s-2">
              <p className="pb-4 text-sm leading-6 paragraph md:text-base">
                {p}
              </p>
            </div>)}
          </div>

          {/* Image */}
          <div className="flex justify-center w-full md:w-1/3">
            <img
              src={mahmoud}
              alt="Mahmoud"
              className="w-[90%] md:w-[75%] md:rounded-e-3xl border-4 border-secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}
