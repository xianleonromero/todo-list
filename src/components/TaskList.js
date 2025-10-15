import './TaskList.css';
import TaskItem from './TaskItem';
function TaskList({tareas}) {
  return (
    //Recorre el array (cada elemento es "tarea" y el indice "index") y crea un li 
    // a partir de llamar al componente 'TaskItem' y dentro el nombre de la tarea
    <ul className='task-list'>
        {tareas.map((tarea, index) => (
            <TaskItem key={index} tarea={tarea}/>
        ))}
    </ul>
  );
}

export default TaskList;