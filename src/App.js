import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "./bootstrap-5.3.3-dist/css/bootstrap.css";
import "./bootstrap-5.3.3-dist/js/bootstrap.bundle.js";

function App() {
  const id = useRef(0);
  const [tasks, setTasks] = useState([]);
  const [newData, setNewData] = useState({
    text: "", description: "", lieu: "", isPriority: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!newData.text.trim()) return;

      let now = new Date();
      let temps = now.toLocaleString();
      const newTask = {
        id: id.current++,
        text: newData.text, 
        description: newData.description, 
        place: newData.lieu, 
        date: temps, 
        completed: false, 
        isPriority: newData.isPriority
      };
      setTasks([...tasks, newTask]);
      setNewData({ text: "", description: "", lieu: "", isPriority: false}); //Réinitialise l'entrée
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
     if(tasks.length == 0) { id.current = 0 }
   });

  return (
    <div style={{ padding: "20px" }} id="corps">
      <form onSubmit={addTask}>
        <div className="row g-4">
          <div className="col-md-6">
            <h1 className="display-3">To-Do App</h1>
          
            <div className="input-group">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="..."
                  value={newData.text}
                  onChange={handleChange}
                  capitalize="true"
                  id="ajouterUneTache"
                  name="text"
                  autoFocus
                  required
                />
                <label className="form-label" htmlFor="ajouterUneTache">
                  Add a new task
                </label>
                <div className="valid-tooltip">Looks good!!</div>
                <div className="invalid-tooltip">Try again!!</div>
              </div>
              <button className="btn" id="btn-ajout" type="submit" onClick={addTask}>
                Ajouter
             </button>
            </div>
              <button type="button" className="d-md-none dropdown-toggle btn" data-bs-toggle="collapse" data-bs-target="#detail" id="Plus"><span>Ajouter des détail</span></button>
          </div>
          <div className=" col-md-6 d-flex flex-column justify-content-end">
            <div className="collapse d-md-block" id="detail">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" checked={newData.isPriority}
                 onChange={(e) => setNewData({ ...newData,isPriority: e.target.checked })} id="priorite" name="priorite" />
                <label className="form-check-label" htmlFor="priorite">Prioritaire</label>
              </div>
              <textarea className="form-control mb-2" value={newData.description} onChange={handleChange} name="description"></textarea>
              <input type="text" className="form-control mb-2" value={newData.lieu} onChange={handleChange} placeholder="Lieu" name="lieu" />
            </div>
          </div>
        </div>
      </form>
      <div className=" list-taches my-md-3 container-fluide">
        <ul className="row g-3 list-unstyled">
          {tasks && tasks.length > 0 ? (
            tasks
              .slice()
              .sort((a, b) => b.isPriority - a.isPriority)
              .map((task) => (
             <div className="col-md-6 col-lg-4"><li
                key={task.id}
                className={`task ${task.classe}`}
              >
                <a className="btn text-nowrap overflow-hidden w-100 text-start text-decoration-none"
                data-bs-toggle="modal" role="button" data-bs-container="body" href={`#dtl-${task.id}`}>{task.text}
                </a>
                <span className="my-auto">{task.isPriority && "⭐"}</span>
                <span className="date my-auto d-none d-md-block">
                  {task.date}
                  <span className="fullDate">{task.date}</span>
                </span>
                <button
                  id="delete"
                  className="btn btn-delete"
                  onClick={() => deleteTask(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
                <button
                  id="complete"
                  className="btn btn-success btn-sm"
                  onClick={() => completeTask(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Completed
                </button>
              </li>
              <div className="modal fade" tabIndex="-1" id={`dtl-${task.id}`}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{ task.text }</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                      <h5 className="card-title">Detail à propos de la tache: </h5>
                      <p className="mt-2">{ task.description }</p>
                    </div>
                    <div className="border-top p-3 ">
                       <span className="mb-1">{ task.place }</span>
                    </div>
                    <div className="modal-footer text-secondary">
                      <span style={{ justifyContent: "flex-start" }}>Added: { task.date }</span>
                      <span>{ task.completed ? `Done: ${ task.dateCompletion }` : "" }</span></div>
                  </div>
                </div>
              </div>
              </div>
            ))
          ) : (
            <p className="text-center text-secondary align-middle">There is no task yet!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
