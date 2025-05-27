import TaskItem from "./TaskItem";
import Modale from "./Modale";

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
                <Modale task={task} />
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
