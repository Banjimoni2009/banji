import { useState } from 'react'

function ReactForm() {
const [color, setColor] = useState('white');
const [inputColor, setInputColor] = useState('');
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setColor(inputColor);
}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
            />
        </form>

        <div style={{backgroundColor: color, width: '100px', height: '100px'}}
        className="rounded-lg border-2 border-black">

        </div>
    </div>
  )
}

export default ReactForm