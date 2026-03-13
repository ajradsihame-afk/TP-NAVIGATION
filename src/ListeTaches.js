// Définition du composant fonctionnel ListeTaches
function ListeTaches() {
  // Déclaration d'un tableau de tâches
  const taches = [
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application" },
    { id: 3, titre: "Tester le code" }
  ];

  // Retourne un élément <ul> contenant la liste des tâches
  return (
    <ul>
      {/* Parcours du tableau de tâches avec map pour créer un <li> par tâche */}
      {taches.map((tache) => (
        // key est nécessaire pour que React identifie chaque élément de manière unique
        <li key={tache.id}>{tache.titre}</li> 
      ))}
    </ul>
  );
}

// Export du composant pour l'utiliser ailleurs
export default ListeTaches;