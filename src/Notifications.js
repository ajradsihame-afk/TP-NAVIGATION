// Import de React et useState si besoin de changer le nombre de notifications
import React from 'react';

// Composant Notifications
function Notifications() {
  const notifications = 3; // Exemple : nombre de notifications

  return (
    <div>
      {/* Affiche le message seulement si notifications > 0 */}
      {notifications > 0 && <p>Vous avez des notifications</p>}
    </div>
  );
}

export default Notifications;