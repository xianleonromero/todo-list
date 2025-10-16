import './TaskList.css';
import TaskItem from './TaskItem';
function TaskList({tareas,eliminarTarea}) {
  return (
    //Recorre el array (cada elemento es "tarea" y el indice "index") y crea un li 
    // a partir de llamar al componente 'TaskItem' y dentro el nombre de la tarea
    <ul className='task-list'>
        {tareas.map((tarea, index) => (
            <TaskItem 
              key={index} 
              tarea={tarea}
              index={index}
              eliminarTarea={eliminarTarea}
            />
        ))}
    </ul>
  );
}

export default TaskList;