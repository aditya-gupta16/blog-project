import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-5 bg-blue-400 py-12'>
          
      <div className="about">
        <h2>Contact: 9039574104</h2>
        <h2>Email: saksham@gmail.com</h2>
      </div>

       <div className="links">
           <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twiiter</a></li>
            <li><a href="">Youtube</a></li>
           </ul>
       </div>
    </div>
  )
}

export default Footer