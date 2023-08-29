import { useEffect} from "react";
import { useState } from "react";

const Effect1 = () => {
let [user,setUser]=useState([])
    useEffect(() => {
       let fetchData =async() =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let todos = await response.json()
        setUser(todos)
       }
       fetchData()
    },[])
    let deleteUser=(id)=>{
        let result = user.filter(x => x.id !== id)
        setUser(result)
    }

    return (
        <div className="effect1">
            {
                user.map(x=>{
                    return(
                       <div>
                         <h1>{x.title}</h1>
                         <h1>{x.id}</h1>
                         <button onClick={()=> deleteUser(x.id)}>Delete</button>
                       </div>
                    )
                })
            }
        </div>
    );
}
export default Effect1;