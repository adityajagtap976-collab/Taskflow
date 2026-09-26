import { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./TaskCard";
import { fetchTasks } from "./fakeApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setloading] = useState(true);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data);
      setloading(false);
    });
  }, []);

  const handleAddTask = () => {
    if (newTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      isUrgent: false,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
  };

  const handleToggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (loading) {
    return <h1>Loading task...</h1>;
  }

  return (
    <div className="App">
      <h1>TaskFlow</h1>

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          isUrgent={task.isUrgent}
          isDone={task.isDone}
          onToggleDone={handleToggleDone}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;
