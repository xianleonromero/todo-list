import { useState } from 'react';
import './TaskInput.css';
function TaskInput() {
    const[input,setInput]=useState('');
    return (
        <div className="task-input-container">
            <input 
                type="text" 
                placeholder="Nueva tarea..." 
                value={input} 
                //cada vez que se escribe algo el texto que se acaba de escribir actualiza la variable input
                onChange={(e)=>setInput(e.target.value)} 
            />
        <button>Añadir</button>
        </div>
    );
}

export default TaskInput;