import React from "react";

const Integration = () => {
  return (
    <div
      className=" w-full h-auto 
     lg:h-screen text-slate-50 bg-opacity-80"
    >
      <section className="py-10 lg:h-[50dvh] h-auto bg-pattern bg-cover pb-20">
        <h1 className="text-center lg:text-5xl md:text-3xl text-2xl font-semibold py-10">
          Integration
        </h1>
        <div className="flex justify-center flex-wrap px-10 gap-5 ">
          <span className="pi pi-google text-4xl border-2 rounded-lg p-4 text-green-200"></span>
          <span className="pi pi-amazon text-4xl border-2 rounded-lg p-4 text-slate-50"></span>
          <span className="pi pi-microsoft text-4xl border-2 rounded-lg p-4 text-blue-700"></span>
          <span className="pi pi-discord text-4xl border-2 rounded-lg p-4 text-purple-200"></span>
          <span className="pi pi-paypal text-4xl border-2 rounded-lg p-4 text-blue-200"></span>
          <span className="pi pi-reddit text-4xl border-2 rounded-lg p-4 text-red-500"></span>
          <span className="pi pi-facebook text-4xl border-2 rounded-lg p-4 text-blue-900"></span>
          <span className="pi pi-twitch text-4xl border-2 rounded-lg p-4 text-indigo-700"></span>
        </div>
      </section>
      <section className="bg-black lg:h-[50dvh] h-auto flex flex-col items-center justify-center py-10">
        <h2 className="lg:px-44 md:px-32 px-5  text-2xl lg:text-5xl text-center font-bold md:w-[80%] leading-[1.4]">The Streamlined CRM for sealing the deal effortlessly</h2>
        <p className="text-slate-300 py-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit ducimus itaque ut impedit.
        </p>
        <div className='pt-6 '>
        <button className={`flex w-full px-10 py-2 justify-center rounded-3xl items-center gap-3 text-white bg-indigo-700`}><span>Try for free</span><span className={`pi pi-arrow-right text-xs`}></span></button>
      </div>
      </section>
    </div>
  );
};

export default Integration;
