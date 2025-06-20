function Filtre({ onFiltre }) {

  // Etat active du bouton
  const filtre = document.querySelectorAll('.filtre');//Les boutons filtres
  filtre.forEach(link => {
    link.addEventListener('click', function(e) {
      filtre.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const boutonsFiltre = [
    { fonction: 'All', label: 'Tous', nomBouton: 'Toutes'},
    { fonction: 'completed', label: 'Complete', nomBouton: 'Complétées'},
    { fonction: 'active', label: 'Active', nomBouton: 'Actives'},
  ];

  return(
        <ul className="nav nav-tabs my-2 d-flex col-md-6 col-lg-4 col-xxl-3 justify-content-md-between">
          { boutonsFiltre.map(({fonction, nomBouton}) => (
	            <li key={fonction}>
	            	<button className="btn-outline-success btn filtre" onClick={() => onFiltre(fonction)} >{nomBouton}</button>
	            </li>
	          ))
    	  }
        </ul>
    );
}
export default Filtre;
