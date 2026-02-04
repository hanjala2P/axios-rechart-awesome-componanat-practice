import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Services', path: '/services' },
  { id: 3, name: 'Portfolio', path: '/portfolio' },
  { id: 4, name: 'About Us', path: '/about' },
  { id: 5, name: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const [Open, setOpen] =useState(false); 
    const links =  navLinks.map(route =><Link key={route.id} route={route}></Link>)

    
    return (
        <nav className='flex justify-between mx-8 mt-2'>
         <span className='flex  gap-1.5' onClick={() => setOpen(!Open)}>
            {
                Open ? 
                <X className='md:hidden'></X> : 
                <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden absolute 
                top-8 left-0 bg-orange-500 w-40 py-8 rounded-se-sm left-8 
                transition-all duration-500 ease-in-out
                ${Open ? 'top-8' : 'left-[-50%]'}
                `}>
                    
                {links}
            </ul>
              
            <h3 className='md:text-2xl text-orange-500 '>My nav bar</h3>
         </span>
            <ul className='md:flex hidden gap-2 items-center font-normal text-lg'>
            
                {
                  links
                }
            </ul>
            <button className='bg-orange-500 text-white h-8/12 px-4 py-2 rounded-md'>Sign In</button>
        </nav>
    );
};

export default Navbar;