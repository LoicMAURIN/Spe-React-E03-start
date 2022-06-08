// objectif : afficher un element sur le DOM : 
// un div avec une classe et du contenu

// on importe React depuis les node_modules
import React from 'react';
import { createRoot } from 'react-dom/client';


/**
 * Un composant est une fonction qui retourne un élément React (eventuelement écrit en JSX)
 * - le nom de cette fonction doit commencer par une majuscule !
 * @return élément React
 */
function Gateau(props) {
  console.log(props);
  /* props contient toutes les valeurs passés en attributs de la balise JSX : 
  <Gateau parfum='chocolat' couleur='marron' />
  {parfum: 'chocolat', couleur: 'marron'}
  */

  /* VERSION avec React.createElement
  const element = React.createElement(
    'div', 
    {className: 'anniversaire'},
    'Je suis un gateau au chocolat'
  );
  */
  

  /* VERSION sucrée avec JSX 
  le JSX sera retraduit en JS par Webpack qui demandera à Babel 
  */
  const element = (
    <div className='anniv'>
      Je suis un gateau au { props.parfum } de couleur { props.couleur }
      <Bougie /> <Bougie /> <Bougie /> <Bougie />
    </div>
  );

  return element;
}

function Bougie() {
  return <span> | </span>
}


/**
 * Pour matérialiser un composant dans le DOM on utilise la fonction render de ReactDOM
 * la fonction render s'apelle sur l'élèment virtuel parent
 * @param : élement vituel enfant : celui retourné par le composant React
 */

// pour récuperer l'element virtuel, j'execute la fonction à la manière de JSX
const virtuelGateauElt = <Gateau parfum='chocolat' couleur='marron' />
/* version sans JSX 
const virtuelGateauElt = Gateau('chocolat');
*/

// on recupere l'element parent et l'utilise pour créer un element React racine (rootContainer)
const parentElt = document.querySelector('#root');
const virtuelParentElt = createRoot(parentElt);

// on "reconcilie" l'element virtuel avec le DOM réel grace à render de ReactDOM
virtuelParentElt.render(virtuelGateauElt);

