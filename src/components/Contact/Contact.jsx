import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section className="flex flex-wrap justify-center py-12 bg-misty">
        <h1 className="w-full py-8 font-bold text-center secondTitle text-primary">
          Contact Me
        </h1>
        <div className="w-[90%] md:w-[60%] ">
          <h1 className="text-[28px] font-semibold text-smothText capitalize">
            Contact information:
          </h1>
          <p className="leading-8 text-secondary">
            For business-related communication, project proposals, or technical
            discussions regarding backend solutions, please submit your message
            below. Your inquiry will be handled with priority and
            confidentiality.
          </p>

          <div className="flex flex-col justify-between py-8 lg:flex-row">
            <div className="w-full pt-4 md:w-1/2 lg:w-1/3">
              <p className="text-[22px] text-smothText">
                <i className="fa fa-location-dot text-secondary"></i> Location
              </p>
              <p className="text-[18px] text-smothText"> Giza, Egypt</p>
            </div>

            <div className="w-full pt-4 md:w-1/2 lg:w-1/3">
              <p className="text-[22px] text-smothText">
                <i className="fa-regular fa-envelope text-secondary"></i> Email
              </p>
              <p className="text-[18px] text-smothText">
                mahmoudatef057@gmail.com
              </p>
            </div>

            <div className="w-full pt-4 md:w-1/2 lg:w-1/3">
              <p className="text-[22px] text-smothText">
                <i className="fa fa-phone text-secondary"></i> Phone
              </p>
              <p className="text-[18px] text-smothText">+201145752170</p>
            </div>
          </div>

          {/* List of icons */}
          <p className="capitalize pb-0 pt-8 md:pb-2 text-[18px] font-semibold">
            {" "}
            Follow me{" "}
          </p>
          <div className="">
            <ul className="font-medium text-[28px] text-primary flex flex-row flex-wrap items-center ps-0 md:p-0  md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="https://www.linkedin.com/in/mahmoud-atef-a77b61284/"
                  target="_blank"
                  className="block capitalize py-1 pe-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0"
                >
                  <i className="fa-brands fa-square-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahmoudattef"
                  target="_blank"
                  className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoudatef057@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mahmod.atef.927"
                  target="_blank"
                  rel="noreferrer"
                  className="block capitalize p-1 rounded-sm  md:border-0 hover:scale-125 transition-all duration-[.5s] md:p-0"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
