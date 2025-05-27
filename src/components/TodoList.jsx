import TaskItem from "./TaskItem";

function TodoList({ tasks, onComplete, onDel }) {
	return (
		<div className=" list-taches my-md-3 container-fluide">
        <ul className="row g-3 list-unstyled">
          {tasks && tasks.length > 0 ? (
            tasks
              .slice()
              .sort((a, b) => b.isPriority - a.isPriority)
              .map((task) => (
             <div className="col-md-6 col-lg-4">

              <TaskItem task={task} onComplete={onComplete} onDel={onDel} />

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
	);
}

export default TodoList;
