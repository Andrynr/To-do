import React, { useState } from "react";
import "./App.css";
import "./bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      let temps = Date();
      temps = temps.slice(0, 24);
      setTasks([...tasks, { text: newTask, date: temps, completed: false }]);
      setNewTask(""); //Réinitialise l'entrée
    }
  };

  const completeTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }} id="corps">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autofocus="true"
          capitalize="true"
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              class={task.completed ? "task complet" : "task"}
              style={{ marginBottom: "10px" }}
            >
              <span>{task.text}</span>
              <span class="date">{task.date}</span>
              <button
                id="delete"
                onClick={() => deleteTask(index)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
              <button
                id="complete"
                onClick={() => completeTask(index)}
                style={{ marginLeft: "10px" }}
              >
                Completed
              </button>
            </li>
          ))
        ) : (
          <p>Aucune tache disponible</p>
        )}
      </ul>
    </div>
  );
}

export default App;
