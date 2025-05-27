import { useState } from 'react';

function TodoForm({ onAdd, children }) {
  const [newData, setNewData] = useState({
    text: "", description: "", lieu: "", isPriority: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newData.text.trim()) return;

    onAdd(newData);

    setNewData({ text: "", description: "", lieu: "", isPriority: false}); //Réinitialise l'entrée
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-md-6">
          <h1 className="display-3">{ children }</h1>
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
                Ajouter une nouvelle tache
              </label>
                <div className="valid-tooltip">Looks good!!</div>
                <div className="invalid-tooltip">Try again!!</div>
            </div>
            <button className="btn" id="btn-ajout" type="submit">
              Ajouter
            </button>
          </div>
        </div>
        
        <button type="button" className="d-md-none dropdown-toggle btn  m-0" data-bs-toggle="collapse" data-bs-target="#detail" id="Plus"><span>Ajouter des détail</span></button>
        <div className=" col-md-6 d-md-flex flex-column justify-content-end">
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
    );
}
export default TodoForm;
