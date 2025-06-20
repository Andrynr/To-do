function Modale({ task }) {
	// Détails de la tache
	return (
		<div className="modal fade" tabIndex="-1" id={`dtl-${task.id}`}>
	        <div className="modal-dialog">
	            <div className="modal-content">
	                <div className="modal-header">
						<h5 className="modal-title">{ task.text }</h5>
	                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
	                </div>
	                <div className="modal-body">
	                    <h5 className="card-title">Détails à propos de la tache: </h5>
	                    <p className="mt-2 " style={{ textTransorm: "capitalize" }} >{ task.description }</p>
	                </div>
	                <div className="border-top p-3 ">
	                	<span className="mb-1">{ task.place }</span>
	                </div>
	                <div className="modal-footer text-secondary">
	                	<span style={{ justifyContent: "flex-start" }}>Ajoutée: { task.date }</span>
	                	<span>{ task.completed ? `Effectuée: ${ task.dateCompletion }` : "" }</span>
	                </div>
	            </div>
	        </div>
	    </div>
	);
}

export default Modale;
