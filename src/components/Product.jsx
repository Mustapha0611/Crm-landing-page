import React from "react";
import bar from "../assets/bars.png";
import chart from '../assets/chart.jpg' 
const Product = () => {
  return (
    <>
      <main className="flex items-center flex-col lg:py-0 py-10 lg:pb-0 h-auto lg:h-[90dvh] md:flex-row"
      id="Product">
        <section className="flex-1 py-0 pb-10 md:pb-0 px-10">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-10" data-aos="fade-up" >
            Empower your Connections
          </h1>
          <p className="text-base text-slate-800 pr-5 pb-10" data-aos="zoom-in">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            facilis sequi tempore. Iste magnam cupiditate excepturi quia
            blanditiis. Optio porro odit placeat aliquam dicta temporibus sint
            nam dolore minima molestias.
          </p>
        </section>
        <section className="flex-1 flex items-center justify-end" data-aos="fade-up">
          <span className="w-full flex justify-end md:h-[20rem] lg:h-[30rem] lg:p-16 p-10 bg-slate-50 rounded-s-xl">
            <img
              src={chart}
              className="w-[96%] md:w-[95%] lg:w-[100%]  rounded-s-2xl  shadow-lg shadow-indigo-700/50"
            />
          </span>
        </section>
        
      </main>
      <main className="flex items-center flex-col lg:py-0 py-10 lg:pb-0 h-auto lg:h-[90dvh] md:flex-row-reverse">
        <section className="flex-1 py-0 pb-10 md:pb-0 px-10 lg:px-20">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-10" data-aos="fade-up">
            Unlock Your Growth Insight
          </h1>
          <p className="text-base text-slate-800 pr-5 pb-10" data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            facilis sequi tempore. Iste magnam cupiditate excepturi quia
            blanditiis. Optio porro odit placeat aliquam dicta temporibus sint
            nam dolore minima molestias.
          </p>
        </section>
        <section className="flex-1 flex items-center justify-end">
          <span className="w-full flex justify-end  md:h-[20rem] lg:h-[30rem] p-10 lg:p-16 bg-slate-50 rounded-e-xl">
            <img
              src={bar}
              className="w-[96%] md:w-[100%] lg:w-[100%]  rounded-e-2xl  shadow-lg shadow-indigo-700/50"
            />
          </span>
        </section>
        
      </main>
    </>
  );
};

export default Product;
