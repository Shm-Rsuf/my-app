import React, { useState } from 'react'

function Hooks() {
    const [count,setCount] = useState(0)

    // function decrementCount(){
    //     setCount(prevCount => prevCount-1)
        // }
    const Decrement =()=>{
        setCount(prevCount => prevCount -1)
    }
    const Increment =()=>{
        setCount(prevCount => prevCount +1)
    }

  return (
    <div>
        <div className="container">
            <button onClick={Decrement}>-</button>
            <span>{count}</span>
            <button onClick={Increment}>+</button>
        </div>
    </div>
  )
}

export default Hooks