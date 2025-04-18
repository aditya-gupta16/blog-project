import React, { useContext } from 'react'
import { User } from '../App'

const New = () => {

    const data = useContext(User)

  return (
    <div>
        <h1>Hello New Component</h1>

        <p className='text-red-500'>Our Constext Data is: {data.name}</p>
    </div>
  )
}

export default New