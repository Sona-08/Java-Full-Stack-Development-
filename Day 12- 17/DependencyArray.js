import React, { useEffect } from 'react'

export const DependencyArray = () => {
    const [count, setCount] = React.useState(0)
    useEffect(() => {
        // console.log("Count Changed to :"+count)
        alert("Count Changed to :"+count)
    }, [count]) 
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  )
}
