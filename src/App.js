import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
function App() {
  const[tareas,setTareas]=useState(['Mock1','Mock2']);
  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskInput/>
      <TaskList tareas={tareas}/>
    </div>
  );
}

export default App;