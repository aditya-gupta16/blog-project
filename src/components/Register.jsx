import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")

   const navigate =  useNavigate()

   function Registerhandler(){
    
    setError("")

    if(!username || !email || !password){
      setError("please Fill All input feilds")
      return  
    }

    const newUser = {username, email, password}

    axios.post('http://localhost:3000/users', newUser)
    .then((res)=> {
      
      navigate("/login")
    })

    .catch((err)=> {

      console.log(err)
    })



   }
   

  return (
    <div>
       <div className='flex items-center justify-center h-screen flex-col'>
        <h1 className='text-4xl text-center'>Resiter Page</h1>
        <div className='w-1/4 mt-4 h-auto py-8 shadow-sm shadow-black rounded-xl flex-col flex px-16 pt-16 gap-6'>
           {error ? <p className='text-red-500 text-center'>{error}</p> : null}
           <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} value={username} className='outline-1 py-1 rounded-md px-2' />
           <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} value={email} className='outline-1 py-1 rounded-md px-2' />
           <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value={password} className='outline-1 py-1 rounded-md px-2'  />
           <button onClick={Registerhandler} className='border-2 rounded-md hover:bg-blue-500 mt-8' >Register</button>

        <a href="/register"><p className='flex'>You don't have an Account <h2 className='text-red-500 ml-2 cursor-pointer'> SignUp</h2> </p></a>

        </div>

    </div>

    </div>
  )
}

export default Register