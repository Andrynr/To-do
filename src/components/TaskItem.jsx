import "./TaskItem.css";
function TaskItem({task, onDel, onComplete}) {
	return (
		<li key={task.id} className={`task ${task.classe}`} >
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
                  onClick={() => onDel(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
                <button
                  id="complete"
                  className="btn btn-success btn-sm"
                  onClick={() => onComplete(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Completed
                </button>
        </li>
	);
}
export default TaskItem;
