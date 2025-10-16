import './TaskItem.css';
function TaskItem({tarea}) {
  return (
    <li className="task-item">
      <span>{tarea}</span>
      <button>X</button>
    </li>
  );
}

export default TaskItem;