import React,{useState} from 'react'

export const CounterClock = () => {
  const [count, setCount] = useState(0)
  // function handleIncrese(){
  //   setCount(count+1)
  // }
  // function handleDecrese(){
  //   setCount(count-1)
  // }
  //   function handleReset(){
  //   setCount(0)
  // }

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increse</button>
        <button onClick={() => setCount(count - 1)}>Decrese</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterClock;
