// Import de React (optionnel avec React 17+, mais utile pour la clarté)
import React from 'react';

// Import des composants utilisés sur la page d'accueil
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';

// Définition du composant fonctionnel Accueil
function Accueil() {
  return (
    <div>
      {/* Titre de la page */}
      <h2>Page d’accueil</h2>

      {/* Affiche le logo du site */}
      <Logo />

      {/* Affiche le lecteur audio */}
      <LecteurAudio />

      {/* Affiche la liste des tâches */}
      <ListeTaches />
    </div>
  );
}

// Export du composant pour l'utiliser ailleurs
export default Accueil;