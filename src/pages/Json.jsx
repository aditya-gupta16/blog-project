import React, {  useState } from 'react'
import axios from 'axios'


const Json = () => {
    const [result, setResult] = useState([])


    axios.get('http://localhost:3000/posts')
    .then(res=> setResult(res.data))
    .catch(err => console.log(err))

    // useEffect(() => {
       
        
       
    // })


    // useEffect(() => {
    //     alert("Hello")
    //     console.log("heelo from effect")
      
    
    //   return () => {
    //     cleaup Function 
    //   }
    // })
    

    

  return (
    <div>
        <h1>Hello Json</h1>
        

        {result.map((data, index)=>(
          <div className='mx-20 my-5 px-5 rounded-xl bg-amber-300 pt-4 hover:bg-red-400 flex flex-col gap-5'>
            {/* <li className='bg-zinc-500 text-red-400'>{data.posts}</li> */}
            <h1 className='capitalize flex '>{data.title} </h1>
            <h1 className='flex '>{data.views}</h1>

          </div>
        ))}

    

    </div>
  )
}

export default Json