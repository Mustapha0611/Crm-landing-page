import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [OpenMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    SetOpenMenu(!OpenMenu);
    console.log('clicked', OpenMenu)
  };
  return (
    <>
      <header className="flex relative lg:h-[10dvh] h-[8dvh] md:px-10 px-5 justify-between items-center shadow-md">
        <section className="font-semibold text-2xl text-slate-900">
          <span>INTERACTIFY</span>
        </section>
        <div
          className="absolute right-5 cursor-pointer top-4 block md:hidden"
          onClick={toggleMenu}
        >
          <span className="pi pi-bars text-2xl"></span>
        </div>
        <nav className="">
          <ul className={`flex flex-col h-[100dvh] md:h-auto  transition-all items-center md:w-auto justify-center overflow-hidden bg-slate-50 md:bg-white md:flex-row gap-4 md:relative absolute top-0 left-0 ${OpenMenu ? 'transition w-full duration-500':'w-0'}`}>
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
              className="pi pi-times top-4 right-5 cursor-pointer absolute text-2xl opacity-100 md:opacity-0"
            ></span>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
