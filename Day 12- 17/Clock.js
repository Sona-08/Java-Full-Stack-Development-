import React from 'react'

export const Clock = () => {
    let n=0
    function plus(){
        n=n+1
        document.getElementById("clock").innerHTML=n
    }
    function minus(){
        n=n-1
        document.getElementById("clock").innerHTML=n
    }
  return (

    <div>
          <h1 id='clock'></h1>
        <button onClick={plus}>+ </button>
        <button onClick={minus}>-</button>
        
      
        

    </div>
  );
}
export default Clock;

