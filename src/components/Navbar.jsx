import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import  {navLinks} from '../constants';
import {logo, menu, close} from '../assets'
import { nav } from 'framer-motion/client';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddindx} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="Logo" className='w-10 h-10 object-cover rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Raza <span className='sm:block hidden'>
            | Awan
          </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link, index) => (
            <li key={index} className={`${
            active === link.title? 'text-white' : 'text-secondary' }'text-white text-[18px] font-medium cursor-pointer
            hover:text-slate-300  transition duration-300 ease-in-out'`}
            onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`}>{link.title}

            </a>
            </li>
          ))}
        </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={ toggle ?menu:close}
            alt="Menu"
            className='w-[280px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
         </div>

      </div>
    </nav>
  );
};export default Navbar;