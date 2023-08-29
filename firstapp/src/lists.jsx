import { useState } from "react";

const Lists = () => {

    let [users, setUsers] = useState(
        
        [
        {
            name : "Somu",
            age : "24",
            role : "Software Engineer",
            id : 1
        },
        {
            name : "Manoj",
            age : "25",
            role : "Web Developer",
            id : 2
        },
        {
            name : "Yashwanth",
            age : "23",
            role : "Software Developer",
            id : 3
        }
    ])

    let remove = (id) => {
        let result =users.filter( (x)=> x.id !== id)
        setUsers(result)
    }
    return ( 
        <div className="lists">
            {
            users.map((data)  =>{
                return(
                    <div className="user">
                        <h1>Name : {data.name}</h1>
                        <h2>Age : {data.age}</h2>
                        <h4>Role : {data.role}</h4>
                        <button onClick={()=> remove(data.id)}>Remove</button>
                    </div>
                )
            } )}
           
        </div>
     );
}
 
export default Lists;
