import { useState } from "react";


function Class() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen">
        <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700" onClick={()=> setCount(count + 1)}>+</button>
        <p className="text-xl font-bold px-4">{count}</p>
        <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700" onClick={()=> setCount(count - 1)}>-</button>
        <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700" onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Class