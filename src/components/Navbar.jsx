// import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
// import Home from './Home';

const Navbar = ({counted}) => {

   return (

      <>

      {counted}

      <nav className='flex items-center justify-between bg-zinc-500 h-20 px-10'>
        <a href="/"><h1 className='text-blue-500 font-bold text-2xl'>Logo</h1></a>
        <ul className='flex gap-5 '>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
                                           
      </nav>
      </>
    
  ) 
}

export default Navbar;



