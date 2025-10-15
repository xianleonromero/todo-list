import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
function App() {
  const[tareas,setTareas]=useState([]);
  const agregarTarea=(nuevaTarea)=>{
    if (nuevaTarea!==''){
      //Los 3 puntos sirven para copiar lo que ya existe y añadir lo nuevo
      setTareas([...tareas,nuevaTarea]);
    }
  }
  return (
    //En taskInput se le pasa la función de agregarTarea
    <div>
      <h1>Lista de tareas</h1>
      <TaskInput agregarTarea={agregarTarea}/>
      <TaskList tareas={tareas}/>
    </div>
  );
}

export default App;