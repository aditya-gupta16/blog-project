import React, { useState } from 'react'

const Todo = () => {
    const [title, setTittle] = useState("")
    const [summary, setSummary] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [task, setTask] = useState([])

    function AddTodo(){

      const newTask = {title, summary, subtitle}
      setTask([newTask])
      setTittle("")
      setSummary("")

    }

  return (
    <div className='p-14'>
        <div className='text-zinc-500 w-60 border-2 h-60 flex items-center justify-center flex-col'>
            <input type="text" placeholder='Enter Your Title' className='outline-1 ' value={title} onChange={(e)=> setTittle(e.target.value)} />
            <input type="text" placeholder='Enter Your Summary' className='outline-1 mt-4' value={summary}  onChange={(e)=> setSummary( e.target.value)} />
            <button onClick={AddTodo} className='border-1 px-4 mt-2'>Add Task</button>
        </div>

        <div className='container w-60 h-auto border-1 mt-14'>
             {/* <ul>
              {task.map((data)=>(
                <li>{data.title}</li>
              ))}
             </ul> */}


                 <ul>
                    {task.map((data, index) => (
                        <div>
                          <li key={index}>{data.title}</li>  
                          <li key={index}>{data.summary}</li>  
                          <button>Delete</button>
                        </div> 
                    ))}
                </ul>

        </div>

    </div>
  )
}

export default Todo