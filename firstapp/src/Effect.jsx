import { useEffect } from "react";
import { useState } from "react";

const Effect = () => {

    // let [data,setData]=useState("hi")
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [])
    let deleteUser = (id) => {
        let result = user.filter(x => x.id !== id)
        setUser(result)
    }
    return (
        <div className="effect">
            {
                user.map((x) => {
                    return (
                        <div>
                            <h1>{x.name}</h1>
                            <h1>{x.id}</h1>
                            <button onClick={() => deleteUser(x.id)}>Delete</button>
                        </div>
                    )
                })
            }
            {/* <h1>{data}</h1>
           <button onClick={()=> setData("hello")}>Change</button> */}
        </div>
    );
}

export default Effect;