import React, { useContext } from 'react'
import { UserContext } from './Usercontext'


const Home = () => {

  const user =  useContext(UserContext)
  

  return (
    <div>
      <h1>
        {user}
      </h1>
    </div>
  )
}

export default Home