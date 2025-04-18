import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Blog from './components/Blog'
import Protected from './components/Protected'
// import Protect from './components/Protect'


// const navigate = useNavigate()

// const first = useState("edgcvbh")

const App = () => {




  return (
    <div>


     <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Protected><Blog/></Protected>}/>
        <Route path='/register' element={<Register />} />
      </Routes>
      </Router>      

    </div>
  )
}

export default App















// Previous -----


// import React, { createContext, useMemo, useState } from 'react'
// import New from './pages/New'
// import About from './pages/About'

// const User = createContext()

// const App = () => {

//   // const [data, setData] = useState(Data)

//   const [value, setValue] = useState(50)

//   const [second, setSecond] = useState(50)

//   const Addon =  useMemo(()=>
// {
//       console.log("hello Log")
//       return value + 20
//    }
//     , [value])

//   return (
//     <div>
//       <h1>hello</h1>

//       <p>Our Data:{data}</p>

//       {Addon}

//       <p>Our Value: {value}</p>

//       <p>Second Value: {second}</p>

//       <button onClick={()=> setValue(value + 20)}>Change</button> <br />

//       <button onClick={()=> setSecond(value - 20)}>Second</button>

//       <User.Provider value={{name: "Aman"}}>
//         <New />
//         <About />
//       </User.Provider>

      
//       {/* <Task1 /> */}
//       {/* <Json /> */}

//       {/* <Todo/> */}
//       {/* <Task/> */}

// {/* 
//       <ul className='w-full bg-green-200 flex items-center py-20 justify-center gap-15 flex-wrap'>
//           {Data.map((res, index) => (
//             <div className='w-60 h-40 border-1 flex flex-col items-center'>
//               <li className='text-red-400'>{res.title}</li>
//               <li className='text-blue-500'>{res.views}</li>
//               <button>Delete</button>
//             </div>
//           ))}
//         </ul> */}

      
    
//     </div>
//   )
// }

// export default App
// export {User}