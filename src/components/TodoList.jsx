import { useState } from "react";
import TaskItem from "./TaskItem";
import Modale from "./Modale";
import "./TodoList.css";
import Filtre from "./Boutonfiltre.jsx";

function TodoList({ tasks, onComplete, onDel }) {
  const [filter, setFilter] = useState("all"); 

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  }).slice()
    .sort((a, b) => b.isPriority - a.isPriority);
    
	return (
    <div className=" list-taches my-md-3 container-fluide">
      <div className="">
        <Filtre onFiltre={setFilter} />
      </div>
      <ul className="row g-3 list-unstyled">
      {alert("Hello")}
        {filteredTasks && filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
              <div key={task.id} className="col-md-6 col-lg-4 col-xxl-3">
                <TaskItem task={task} onComplete={onComplete} onDel={onDel} />
                <Modale task={task} />
              </div>
            ))
          ) : (
            <p className="text-center text-secondary align-middle">There is no task yet!</p>
          )}
      }
      </ul>
    </div>
	);
}

export default TodoList;
