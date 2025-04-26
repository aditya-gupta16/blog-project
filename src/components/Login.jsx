import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword ] = useState("")
    const [error, setError] = useState("")

    const navigate =  useNavigate()

    // useEffect(() => {
    // //   http:register/logins
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    function Loginhandler(){

      // reset the error 
      setError("")

       if(!username && !password){
        // alert("your input feild is blank")
        setError("your input feild is blank")
        return
       }

       if(!username){
        // alert("you email field is blank")
        setError("you username field is blank")
        return
       }

       if(!password){
        // alert("you password field is blank")
        setError("you password field is blank")
        return
       }

       axios.get('http://localhost:3000/users', {params: {username, password}})
       .then((res)=> {
        if(res.data.length > 0){
          // console.log(res.data)
          localStorage.setItem("isthenticate", "true")
          console.log(localStorage.getItem("isthenticate"))
          navigate('/blog')

        }

        else{
          setError("User Not found")
        }
         
       })

       .catch((err)=> {
        console.log(err)
        setError("Something went wronge")
        
       })

      }

   



  return (
    <div className='flex items-center justify-center h-screen flex-col'>
        <h1 className='text-4xl text-center'>Login Page</h1>
        <div className='w-1/4 mt-4 h-96 shadow-sm shadow-black rounded-xl flex-col flex px-16 pt-16 gap-6'>
         
           {error ? <p className='text-red-500 text-center'>{error}</p> : null}
           <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} value={username} className='outline-1 py-1 rounded-md px-2' />
           <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value={password} className='outline-1 py-1 rounded-md px-2'  />
           <button onClick={Loginhandler} className='border-2 rounded-md hover:bg-blue-500 mt-8' >Login</button>

        <a href="/register"><p className='flex'>You don't have an Account <h2 className='text-red-500 ml-2 cursor-pointer'> SignUp</h2> </p></a>

        </div>

    </div>
    )
  }


export default Login