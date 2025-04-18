import React, { useContext } from 'react'
import { User } from '../App'

const About = ({data, phone}) => {



  const datas = useContext(User)

  return (

  
    <>


    <p>Our second data: {datas.name}</p>


    <h1>Surprise for you {data}</h1>

    <h2>Surprice Iphone {phone}</h2>
     
    {/* {props.data} */}


    <div className='px-10 h-screen bg-red-300 text-center text-5xl p-1'>
    <h1 className='mt-14'>Hello This is About Page</h1>
    <h2>Welcome You!</h2>

    <div className="card-parent flex items-center justify-evenly mt-14">
     <div className="card h-40 w-32 bg-white rounded-2xl shadow-lg shadow-black "></div>
     <div className="card h-40 w-32 bg-white rounded-2xl shadow-lg shadow-black "></div>
     <div className="card h-40 w-32 bg-white rounded-2xl shadow-lg shadow-black "></div>
     <div className="card h-40 w-32 bg-white rounded-2xl shadow-lg shadow-black "></div>
    </div>
   </div>

   </>
  )
}

export default About