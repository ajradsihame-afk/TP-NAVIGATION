// Import du hook useState pour gérer l'état du composant
import { useState } from 'react';

// Définition du composant fonctionnel Connexion
function Connexion() {
  // Déclaration d'un état "connecte" initialisé à false
  // setConnecte permet de modifier cet état
  const [connecte, setConnecte] = useState(false);

  return (
    <div>
      {/* Affiche "Connecté" si connecte est true, sinon "Déconnecté" */}
      {connecte ? (
        <h3>Connecté</h3>
      ) : (
        <h3>Déconnecté</h3>
      )}

      {/* Bouton qui inverse l'état connecte lorsqu'on clique dessus */}
      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

// Export du composant pour pouvoir l'utiliser ailleurs
export default Connexion;