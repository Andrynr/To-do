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

  const completeTask = (index) => {
    setTasks([...tasks, tasks.map((task, i) => (task.completed = i === index ? true : task))]);
  }
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do App</h1>
      <div>
        <input type="text" placeholder="Ajouter une tâche..." value={newTask}
        onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span>{ task.text }</span>
            <button onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px"}}>Delete
            </button>
            <button onClick={() => completeTask(index)} 
            style={{ marginLeft: "10px"}}>Completed</button>
          </li>
        ))) : (<p>Aucune tache disponible</p>)}
      </ul>
    </div>
  );
}

export default App;
