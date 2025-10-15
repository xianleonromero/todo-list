import './TaskList.css';
function TaskList({tareas}) {
  return (
    //Recorre el array (cada elemento es "tarea" y el indice "index") y crea un li con el atributo key (que es el indice) y dentro el nombre de la tarea
    <ul className='task-list'>
        {tareas.map((tarea, index) => (
            <li className="task-item" key={index}>{tarea}</li>
        ))}
    </ul>
  );
}

export default TaskList;