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
  const eliminarTarea=(indice) =>{
    const nuevasTareas=tareas.filter((tarea,i) =>i!==indice);
    setTareas(nuevasTareas);
  }
  return (
    //En taskInput se le pasa la función de agregarTarea
    <div>
      <h1>Lista de tareas</h1>
      <TaskInput agregarTarea={agregarTarea}/>
      <TaskList tareas={tareas} eliminarTarea={eliminarTarea}/>
    </div>
  );
}

export default App;