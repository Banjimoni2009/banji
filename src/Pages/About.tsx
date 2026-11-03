import { useState } from "react"

function About() {

  const [current, setCurrent] =useState(true)

  return (
    <div>
      {/* <form action="" className="flex flex-col gap-3 bg-slate-50 p-5 rounded-md shadow-md max-w-xl w-1/2 m-auto">
        <input type="text" placeholder="Name" className="border w-full pl-2 h-10"/>
        <input type="email" placeholder="Email" className="border w-full pl-2 h-10"/>
        <textarea placeholder="Message" className="border w-full pl-2 h-20"></textarea>
        <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700">Submit</button> 
      </form> */}

      {/* <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in hover:duration-700" onClick={()=> alert('i have benn clicked')}>Click</button> */}


      <p className="text-2xl font-semibold">Now you {current ? 'see me' : 'dont'}...</p>
      <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700"  onClick={()=>setCurrent(!current)}>Click</button>
    </div>
  )
}

export default About