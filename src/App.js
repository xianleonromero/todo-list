import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
function App() {
  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;