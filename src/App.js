import React, { useState } from "react";
import "./App.css";
import "./bootstrap-5.3.3-dist/css/bootstrap.css";

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
        i === index ? { ...task, completed: true, classe: "complet" } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }} id="corps">
      <h1 className="display-3">To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autofsssocus="true"
          capitalize="true"
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <div className="list-taches row">
        <ul>
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li
                key={index}
                className={`task col col-md-6 ${task.classe}`}
                style={{ marginBottom: "10px" }}
              >
                <span className="texte">{task.text}</span>
                <span className="date">
                  {task.date}
                  <span className="fullDate">{task.date}</span>
                </span>
                <button
                  id="delete"
                  className="btn btn-secondary"
                  onClick={() => deleteTask(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
                <button
                  id="complete"
                  className="btn btn-success"
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
    </div>
  );
}

export default App;
