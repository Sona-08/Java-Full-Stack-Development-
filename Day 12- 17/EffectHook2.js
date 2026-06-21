import React, { useState, useEffect } from 'react';
import MESSI from "./MESSI.jpg";
import ronaldo from "./ronaldo.jpg";

function EffectHook2() {
  const [img, setImg] = useState(MESSI);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImg(ronaldo);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
     
      <img src={img}  width="300" />
    </div>
  );
}
export default EffectHook2;










// import React, { useState, useEffect } from "react";

// function Effecthook() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "100px",
//         border: "1px solid #ccc",
//         width: "250px",
//         margin: "100px auto",
//         padding: "20px",
//         borderRadius: "10px",
//       }}
//     >
//       <h1>Auto Counter</h1>
//       <h2>{count}</h2>
//       <p>Updates every 2 seconds</p>
//     </div>
//   );
// }

// export default Effecthook;










// import React, { useEffect ,useState} from 'react'

// export const Effecthook = () => {

//     const[color,setColor] = useState("red");
//     const [size, setSize] = useState(20);
//         useEffect(()=>{
//             const interval = setInterval(()=>{
//                 // setMessage(prev => prev === "red"?"blue":"red");
//                 setColor(color => color === "red"?"blue":"red");
//                 setSize(size => size + 20);
//             },1000);
//             //After 10 seconds the font size and color change will be stopped
//              const timer = setTimeout(() => {
//                 clearInterval(interval);
//             }, 10000);

//             return() => {clearInterval(interval);
//                 clearTimeout(timer);
//             }//cleanup
//         },[]);
//     return (
//         <div style ={{textAlign:"center",marginTop:"50px"}}>
//             {/* <h1 >Message</h1> */}
//             <h1
//             style={{
//             color: color,
//             fontSize: size
//             }}
//         >Message</h1>
//         </div>
//     );
//     }

// function Effecthookeg() {
//   const [message, setMessage] = useState(
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setMessage((img) =>
//         img ===
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//           ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeEt_Z-BXS4vc2R-Ryg8iaqFYDuQKYZ0-qM5J2RMzzA&s=10&#39;
//           : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//       );
//     }, 2000); // change every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '0px' }}>
//       <h1>Golden Retriever</h1>

//       <img
//         src={message}
//         alt="Golden Retriever"
//         style={{
//           width: '600px',
//           height: '600px'
//         }}
//       />
//     </div>
//   );
// }

// export default Effecthookeg;