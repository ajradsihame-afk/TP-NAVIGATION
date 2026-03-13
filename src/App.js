// Import React et le routeur
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import des composants
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';

// Import du CSS pour les styles
import './App.css';

// Définition du composant principal App
function App() {
  return (
    <div>
      {/* Titre principal */}
      <h1 className="titre">Mon Application React</h1>

      {/* Barre de navigation avec liens vers toutes les pages */}
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Composant Connexion visible sur toutes les pages */}
      <Connexion />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />       {/* Page d'accueil */}
        <Route path="/apropos" element={<Apropos />} /> {/* Page À propos */}
        <Route path="/contact" element={<Contact />} /> {/* Page Contact */}
      </Routes>
    </div>
  );
}

// Export pour index.js
export default App;