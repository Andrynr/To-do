import { ReactComponent as AllIcon } from '../assets/icons/list-solid.svg';
import { ReactComponent as CheckIcon } from '../assets/icons/circle-check-big.svg';
import { ReactComponent as ActiveIcon } from '../assets/icons/circle-solid.svg';

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
    { fonction: 'All', label: 'Tous', nomBouton: 'Toutes', icone: AllIcon },
    { fonction: 'completed', label: 'Complete', nomBouton: 'Complétées', icone: CheckIcon },
    { fonction: 'active', label: 'Active', nomBouton: 'Actives', icone: ActiveIcon },
  ];

  return(
        <ul className="nav nav-tabs d-flex col-md-6 col-lg-4 col-xxl-3 justify-content-around justify-content-sm-between">
          { boutonsFiltre.map(({fonction, nomBouton, icone: Icon}) => (
	            <li key={fonction}>
	            	<button className="btn-outline-success btn filtre" onClick={() => onFiltre(fonction)} >
                  <span className="d-none d-sm-inline">{nomBouton}</span>
                  <span className="d-inline d-sm-none" title={nomBouton} ><Icon style={{width: 2 + 'em'}} /></span>
                </button>
	            </li>
	          ))
    	  }
        </ul>
    );
}
export default Filtre;
