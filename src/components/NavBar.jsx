import React from 'react'
import { useState } from 'react'


const NavBar = () => {
    const [OpenMenu, SetOpenMenu] = useState(false)
  return (
    <>
        <header className='flex relative border lg:h-[10dvh] px-10 justify-between items-center'>
            <section className='font-semibold text-2xl text-slate-900'>
                <span>INTERACTIFY</span>
            </section>
            <nav className='relative border'>
                <ul className='flex gap-4'>
                    <li><a href="">About</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Integration</a></li>
                </ul>
            </nav>
            <div className='absolute right-5 top-5'>
                    <span className='pi pi-bars text-2xl'></span>
                </div>
        </header>
    </>
  )
}

export default NavBar