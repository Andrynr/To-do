import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const id = useRef(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (newData) => {
      let now = new Date();
      let temps = now.toLocaleString();
      const newTask = {
        id: id.current++,
        text: newData.text.trim(), 
        description: newData.description.trim(), 
        place: newData.lieu, 
        date: temps, 
        completed: false, 
        isPriority: newData.isPriority
      };
      setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
        let now = new Date();
    setTasks(
      tasks.map((task) => 
        task.id === index ? { ...task, completed: true, dateCompletion: task.dateCompletion ? task.dateCompletion : now.toLocaleString(), classe: "complet" } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task) => task.id !== index));
  };
  
  useEffect(() => {
     if(tasks.length === 0) { id.current = 0 }
   });

  return (
    <div style={{ padding: "20px" }} id="corps">
      <TodoForm onAdd={addTask} >To-Do App</TodoForm>
      <TodoList tasks={tasks} onComplete={completeTask} onDel={deleteTask} />
    </div>
  );
}

export default App;
