// Import du fichier audio
import son from './audio.mp3';

// Définition du composant fonctionnel LecteurAudio
function LecteurAudio() {
  return (
    // Balise <audio> HTML avec contrôle (play, pause, volume)
    // src pointe vers le fichier audio importé
    <audio controls src={son}>
      {/* Message affiché si le navigateur ne supporte pas la balise <audio> */}
      Votre navigateur ne supporte pas la lecture audio.
    </audio>
  );
}

// Export du composant pour l'utiliser ailleurs
export default LecteurAudio;