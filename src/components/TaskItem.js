function TaskItem({ tarea, index }) {
  return (
    <li className="task-item">
      {tarea}
    </li>
  );
}

export default TaskItem;