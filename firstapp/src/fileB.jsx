const FileB = (params) => {

    //let  count =params.count 
    // let course=params.course
    let todos = params.task
    return (
        <div className="FileB">
            {/* <h1>{params.count} {params.course}</h1> */}
            {/* <h1>{count} {course}</h1> */}
            {
                todos.map((y) => {
                    return (
                        <div className="data">
                            <h1>Task: {y.title}</h1>
                        <h2>Completed Status: {y.completed.toString()}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FileB;