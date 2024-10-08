import React from "react";

const footerSection = () => {
  return (
    <>
      <footer className="lg:h-[50dvh] h-auto w-full bg-white"
      id="footer">
        <div className="flex justify-between px-5 md:px-10 py-5 flex-wrap gap-5">
          <section>
            <h2 className="font-bold text-3xl  pb-4">Interactify</h2>
            <p className="w-[320px] pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nobis officiis obcaecati
            </p>
            <div className="relative w-full  md:px-0 md:w-[320px] z-0">
              <input
                type="email"
                className="border border-slate-600 rounded-3xl py-3 px-5 w-full"
                placeholder="enter your email"
              />
              <button className="absolute top-1.5 rounded-3xl  px-3 py-1.5 right-1.5  bg-indigo-600 text-white">
                Subscribe
              </button>
            </div>
          </section>
          <ul className="flex gap-10 text-slate-900">
            <li className="flex flex-col gap-1">
              <a href="" className="text-semibold pb-5">
                Home
              </a>
              <a href="">lorem</a>
              <a href="">lorem</a>
              <a href="">lorem</a>
            </li>
            <li className="flex flex-col gap-1">
              <a href="" className="text-semibold pb-5">
                Contact us
              </a>
              <a href="">lorem</a>
              <a href="">lorem</a>
              <a href="">lorem</a>
            </li>
            <li className="flex flex-col gap-1">
              <a href="" className="text-semibold pb-5">
                About us
              </a>
              <a href="">lorem</a>
              <a href="">lorem</a>
              <a href="">lorem</a>
            </li>
          </ul>
        </div>
        <div className="border-2 mx-5 md:mx-10 border-slate-900 rounded-lg"></div>
        <div className="flex justify-between items-center text-slate-800 flex-wrap py-10 px-5 md:px-10 ">
          <span className="text-2xl font-bold">&copy; 2024 Interactify</span>
          <aside className="flex gap-4">
            <span className="pi pi-facebook text-xl text-slate-800"></span>
            <span className="pi pi-instagram text-xl text-slate-800"></span>
            <span className="pi pi-linkedin text-xl text-slate-800"></span>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default footerSection;
