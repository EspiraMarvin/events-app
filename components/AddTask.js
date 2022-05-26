const AddTask = () => {
    return ( 
        <div className="max-w-md px-4 pt-10 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <p className="font-bold">Add Task</p>
            <div className="pl-4 space-y-4 column">
            <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Task Title
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Task Title">
         </input>
    </div>
               Task: <input className="w-1/4 h-8 border-black"  type="text"></input>
            <br />
               Time: <input className="w-1/4 h-10" type="data"></input>
            </div>
        </div>
     );
}
 
export default AddTask;