import React from "react";
import style from "./Home.module.css";
import mahmoud from '../../assets/images/mahmoud1.jpg'

export default function Home() {
  return (
    <>
      <section className="flex flex-col w-full min-h-screen px-6 pt-12 pb-8 md:pb-0 md:pt-6 lg:items-center md:flex-row md:px-12 md:py-0">

  <div className="w-full pt-10 md:w-1/2 md:text-left md:mt-0">
    <img
      src={mahmoud}
      alt="Mahmoud"
      className="w-full md:w-[80%] rounded-3xl"
    />
  </div>

  <div className="w-full mt-10 md:w-1/2 md:text-left md:mt-0">
    <h1 className="pb-5 mainTitle text-primary">Hello</h1>

    <h1 className="pt-8 text-3xl">I'am Mahmoud Atef</h1>

    <p className="pt-2 pb-5 text-sm leading-7 paragraph sm:text-base">
      .NET Backend Developer, Creating efficient backend systems with
      clean architecture and modern .NET technologies.
    </p>

    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1KXVo5Ka59E8aXKA5L24AQi4_s18HeaZ6/view"
        className="inline-flex items-center px-6 py-3 text-white transition-all hover:scale-110 bg-primary rounded-xl"
      >
        View CV
      </a>
    </div>
  </div>

</section>


      {/*<section className="flex flex-col-reverse items-end justify-end w-full min-h-screen px-6 pt-72 lg:items-center hero md:flex-row md:px-12 md:py-0">
      
    //   <div className="w-full mt-10 md:w-1/2 md:text-left md:mt-0">
    //     <h1 className="pb-5 mainTitle text-primary">Hello</h1>
    //     <h1 className="pt-8 text-3xl">I'am Mahmoud Atef</h1>
    //     <p className="pt-2 pb-5 text-sm leading-7 paragraph sm:text-base">
    //       .NET Backend Developer, Creating efficient backend systems with clean
    //       architecture and modern .NET technologies.
    //     </p>

    //     <div className="flex flex-wrap justify-center gap-4 md:justify-start">
    //       <a
    //         target="_blank"
    //         href="https://drive.google.com/file/d/1KXVo5Ka59E8aXKA5L24AQi4_s18HeaZ6/view"
    //         className="inline-flex items-center px-6 py-3 text-white transition-all hover:scale-110 bg-primary rounded-xl"
    //       >
    //         View CV
    //       </a>
    //     </div>
       </div>
     </section>*/}
    </>
  );
}
