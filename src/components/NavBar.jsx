import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [OpenMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    SetOpenMenu(!SetOpenMenu);
  };
  return (
    <>
      <header className="flex relative lg:h-[10dvh] h-[8dvh] px-10 justify-between items-center shadow-md">
        <section className="font-semibold text-2xl text-slate-900">
          <span>INTERACTIFY</span>
        </section>
        <div
          className="absolute right-5 top-4 block md:hidden"
          onClick={toggleMenu}
        >
          <span className="pi pi-bars text-2xl"></span>
        </div>
        <nav className="">
          <ul className="flex flex-col h-[100dvh] md:h-auto items-center justify-center  overflow-hidden w-0 bg-slate-50 md:bg-white md:flex-row gap-4 md:relative absolute top-0 left-0"
            
          >
            <li onClick={toggleMenu}>
              <a href="">About</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="">Product</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="">Contact</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="">Integration</a>
            </li>
            <span
              onClick={toggleMenu}
              className="pi pi-times top-4 right-5 absolute text-2xl opacity-100 md:opacity-0"
            ></span>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
