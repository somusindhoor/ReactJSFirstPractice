import { useRef } from "react";

const Ref = () => {
    let title = useRef(null)

    let text = useRef(null)

    let submit =()=>{
       console.log(text.current.value);

       
     }

    // let submit =()=>{
    //    // console.log(title.current.textContent);
    //    title.current.textContent = "hi"
    // }

    return ( 
        <div className="ref">
            <h1 ref={title}>UseRef Hook</h1>
            <input ref={text} type="text" />
            <button onClick={submit}>Submit</button>
        </div>
     );
}
export default Ref;