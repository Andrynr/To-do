import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Chargement des données enregistrées
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const lastId = useMemo(() => {
    // Dernier id
    if (!tasks.length) return null;
    return tasks.reduce((max, t) => (t.id > max ? t.id : max), -Infinity);
  }, [tasks]);

  // Enregistrement en mémoire à chaque modification
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newData) => {
    // Ajouter une nouvelle tache
    let now = new Date();
    let temps = now.toLocaleString();
    const newTask = {
      id: lastId + 1,
      text: newData.text.trim(),
      description: newData.description.trim(),
      place: newData.lieu,
      date: temps,
      completed: false,
      isPriority: newData.isPriority,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
    // Marquer comme complet
    let now = new Date();
    setTasks(
      tasks.map((task) =>
        task.id === index
          ? {
              ...task,
              completed: true,
              dateCompletion: task.dateCompletion
                ? task.dateCompletion
                : now.toLocaleString(),
              classe: "complet",
            }
          : task
      )
    );
  };

  const deleteTask = (index) => {
    // Effacer une tache
    setTasks(tasks.filter((task) => task.id !== index));
  };

  return (
    <div className="p-sm-4" id="corps">
      <TodoForm onAdd={addTask}>To-Do App</TodoForm>
      <TodoList tasks={tasks} onComplete={completeTask} onDel={deleteTask} />
    </div>
  );
}

export default App;
