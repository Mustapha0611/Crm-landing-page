import React from "react";
import woman from '../assets/woman.jpg'

const Hero = () => {
  return (
    <>
      <main className="flex items-center flex-col lg:py-0 py-10 lg:pb-0 h-auto lg:h-[90dvh] md:flex-row">
        <section className="flex-1 py-0 pb-10 md:pb-0 px-10">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-10 leading-[1.2]">The Ultimate CRM platform for thriving Businesses.</h1>
          <p className="text-base text-slate-800 pr-5 pb-10">
            From lead generation to conversion, retention, and beyond,
            our platform empowers you with actionable insights
            and seamless integrations.
          </p>
          <button className="bg-indigo-700 px-5 py-3 text-white flex items-center gap-2 rounded-2xl font-semibold">
            <span>Learn More</span> <span className="pi pi-arrow-right"></span>
          </button>
        </section>
        <section className="flex-1 flex items-center justify-end">
          <span className="w-full flex justify-end md:h-[25rem] lg:h-[30rem] h-[20rem]">
            <img src={woman} className="w-[90%] md:w-[95%] lg:w-[90%]  rounded-s-2xl h-full shadow-lg shadow-indigo-700/50"/>
          </span>
        </section>
      </main>
    </>
  );
};

export default Hero;
