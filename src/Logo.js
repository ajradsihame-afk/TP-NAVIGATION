// Import de l'image du logo depuis le fichier logo.png
import logo from './logo.png';

// Définition du composant fonctionnel Logo
function Logo() {
  return (
    // Affiche l'image du logo avec un texte alternatif
    <img src={logo} alt="Logo du site" style={{ width: '100px', height: 'auto' }} />
  );
}

// Export du composant pour l'utiliser ailleurs
export default Logo;