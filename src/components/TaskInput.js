import { useState } from 'react';
import './TaskInput.css';
function TaskInput({agregarTarea}) {
    const[input,setInput]=useState('');
    const manejarClick=()=>{
        agregarTarea(input);
        setInput('');
    }
    const manejarEnter=(e)=>{
        if (e.key==='Enter'){
            manejarClick();
        }
    }
    return (
        <div className="task-input-container">
            <input 
                type="text" 
                placeholder="Nueva tarea..." 
                //cada vez que se escribe algo el texto que se acaba de escribir actualiza la variable input
                onChange={(e)=>setInput(e.target.value)} 
                // y por ende el value también se modifica
                value={input} 
                //para manejar enter
                onKeyDown={manejarEnter}
            />
        <button onClick={manejarClick}>Añadir</button>
        </div>
    );
}

export default TaskInput;