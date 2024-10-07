import React from "react";

const footerSection = () => {
  return (
    <>
      <footer className="md:h-[50dvh] h-auto w-full bg-white">
        <div className="flex justify-between md:px-10 px-5 py-5 flex-wrap gap-5">
          <section>
            <h2 className="font-bold text-3xl shadow-sm pb-4">Interactify</h2>
            <p className="w-[320px] pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nobis officiis obcaecati 
            </p>
            <div className="relative w-[320px]">
              <input
                type="email"
                className="border border-slate-600 rounded-3xl py-3 px-5 w-full"
                placeholder="enter your email"
              />
              <button className="absolute top-1.5 rounded-3xl px-3 py-1.5 right-1.5 bg-indigo-600 text-white">
                {" "}
                Subscribe
              </button>
            </div>
          </section>
          <section className="flex gap-4">
            <a href="">
                home
            </a>
            <a href="">About</a>
            <a href="">Career</a>
            <a href="">Product</a>
            <a href="">Integration</a>
          </section>
        </div>
      </footer>
    </>
  );
};

export default footerSection;
