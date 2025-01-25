import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); //Réinitialise l'entrée
    }
  };
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do App</h1>
      <div>
        <input type="text" placeholder="Ajouter une tâche..." value={newTask}
        onChange={(e) => setNewTask(e.target.value)} />
        <button onclick={addTask}>Ajouter</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ margingBottom: "10px" }}>
            <span>{task.text}</span>
            <button onclick={() => deleteTask(index)}
              style={{ marginLeft: "10px"}}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
