const Events = () => {
  let submitFn=(x) =>{
     // console.log("Submitted");
      console.log(`hello ${x}`)
  }
  return ( 
      <div className="events">
        <button onClick={()=>submitFn("react")}>click</button>
      </div>
   );
}

export default Events;