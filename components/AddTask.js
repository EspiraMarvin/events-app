const AddTask = () => {
    return ( 
        <div className="max-w-md px-4 pt-10 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            Add Task
            <div className="pl-4 space-y-4 column">
               Task: <input className="w-1/4 h-8"  type="text"></input>
            <br />
               Time: <input className="w-1/4 h-10" type="data"></input>
            </div>
        </div>
     );
}
 
export default AddTask;