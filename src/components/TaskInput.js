import './TaskInput.css';
function TaskInput() {
  return (
    <div className="task-input-container">
      <input type="text" placeholder="Nueva tarea..." />
      <button>Añadir</button>
    </div>
  );
}

export default TaskInput;