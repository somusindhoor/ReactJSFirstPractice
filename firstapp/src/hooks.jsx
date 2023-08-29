import { useState } from "react";

const Hooks = () => {
    let [value,setValue]=useState(0)
   let increase =() =>{
    setValue(++value)
   }
//    let decrease =()=>{
//     setValue(--value)
//    }
//    let reset=()=>{
//     setValue(0)
//    }
    return ( 
        <div className="hooks">
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            {/* <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button> */}
            <button onClick={()=>setValue(--value)}>Decrease</button>
            <button onClick={()=>setValue(0)}>Reset</button>
        </div>
     );
}
 
export default Hooks;