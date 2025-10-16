import './TaskItem.css';
function TaskItem({tarea,index,eliminarTarea}) {
  const manejarEliminar=()=>{
    eliminarTarea(index);
  }
  return (
    <li className="task-item">
      <span>{tarea}</span>
      <button onClick={manejarEliminar}>X</button>
    </li>
  );
}

export default TaskItem;