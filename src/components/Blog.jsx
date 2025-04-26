import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'




const Blog = () => {
 

  const navigate =  useNavigate()

  const [blog, setBlog] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")
  const [edit, setEdit] = useState(null)

  const [store, setStore] = useState([])

  // GetData
   useEffect(() => {
    axios.get('http://localhost:3000/Blogs')
   .then(res=> setStore(res.data))
    
   }, [])
   

  // axios.get('http://localhost:3000/Blogs')
  // .then(res=> setStore(res))

  function AddTask(event){
    event.preventDefault()
    if(!blog || !summary || !content){
      setError('Please input feilds')
      return
    }

    const newdata = {blog, summary, content}

    // setStore([...store, newdata]) 

     axios.post('http://localhost:3000/Blogs', newdata )

     .then((res)=> {
      setStore([...store, res.data])
     })

     .catch((err)=> console.log(err))


    //  const newdata = {blog, summary, content}
    //  setStore([...store, newdata])

    // const newdata = {blog, summary, content}

    // try {
    //   axios.post('http://localhost:3000/Blogs', newdata)


    // } 
    // catch (error) {
    //   console.log(error)
      
    // }

   

}

// delete handler Axios call


   async function deletehandler(id){
  
     try {
      await axios.delete(`http://localhost:3000/Blogs/${id}`)

     const updated =  store.filter((res)=> res.id !== id)
     setStore(updated)
      
     } catch (error) {
       setError("something went wronge")
      
     }


      // ------ // Promises handle
    //   axios.delete(`http://localhost:3000/Blogs/${id}`)
    //   .then((res)=>{
    //     const filtereddata = store.filter((data)=> data.id !== id)
    //     setStore(filtereddata)

    //  })
    //  .catch((err)=> console.log(err))

    // -----
     
    //  axios.delete(`http://localhost:3000/Blogs/${id}`)
    //  .then(data=> data.id )

    
    //   const updated =  store.filter(result=> id !== result.id)
    //   setStore(updated)
      
   }

   function Edithandler(id){
    const editBlog = store.find((index)=> index.id === id)
    setBlog(editBlog.blog)
    setSummary(editBlog.summary)
    setContent(editBlog.content)
    setEdit(id)


   }


   function SaveTask(edit){
    const updatedData = {
      blog, summary, content
    }

    axios.put(`http://localhost:3000/Blogs/${edit}`, updatedData)
    .then((res)=> 
       store.map((data)=> data.id === edit ? setStore(res.data) : data)
    //  setStore(res.data)
    )
    .catch((err)=> {
      console.log(err)


    }
  )

   }

   function logouthandler(){
    localStorage.removeItem('isthenticate')
    navigate('/login')
   }

   function deleteAllhandler(id){
     
    //  axios.delete('http://localhost:3000/Blogs')
    //  .then(data=> data.id )

    
      const updatedAll =  store.filter(data=> data.id !== id)
      setStore(updatedAll)
      
   }

  //  function logout(){
  //   localStorage.removeItem("isthenticate")
  //   navigate('/login')
  //  }

  

  return (  
   <>
    
    
    <div className='w-full px-24 h-auto py-14 text-center '>

        <button onClick={logouthandler} className='absolute right-2 top-2 bg-blue-500 px-10 py-1 rounded-lg ' >logout</button>

        {/* <h1>heelo Blog page</h1> */}
        {error ? <p className='text-red-500'>{error}</p> : null}
        <input type="text" placeholder='Blog Name' value={blog} onChange={(e)=> setBlog(e.target.value)} className='w-full border-1 py-2 px-2 ' />
        <input type="summary" placeholder='Summary' value={summary} onChange={(e)=> setSummary(e.target.value) } className='w-full border-1 py-2 px-2 mt-2' />
        <input type="content" placeholder='Content' value={content} onChange={(e)=> setContent(e.target.value) } className='w-full border-1 py-2 mt-2 px-2' /> <br />
        <button onClick={edit ? SaveTask : AddTask} className='border-1 px-4 mt-4' >{edit ? "Save Blog" : "Add Blog"}</button>
          


    </div>

    {store.map((data)=>(
      <div className='border-1 mt-4 w-1/2 mx-24 px-10 list-none relative' >
         <li key={data.id}>
         <h1 className='text-red-500 font-bold capitalize text-2xl'>{data.blog}</h1>
         <h1 className='text-blue-400'>{data.summary}</h1>
         <h1 className='text-blue-900'>{data.content}</h1>
      </li>

      <button onClick={()=> Edithandler(data.id)}  className='bg-zinc-500 text-white p-2 rounded-xl cursor-pointer' >Edit Blog</button>
      <button onClick={()=> deletehandler(data.id)} className='absolute right-4 bottom-2 text-red-700 cursor-pointer'>Delete Blog</button>
      <button onClick={()=> deleteAllhandler(data.id)}>DeleteAll</button>   


      </div>

      
    ))}
   </>
  )
}

export default Blog