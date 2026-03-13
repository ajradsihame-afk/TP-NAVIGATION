// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Composant ListeCourses qui reçoit un tableau en props
function ListeCourses({ elements }) {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={index}>{element}</li> // Utilisation de map pour afficher la liste
      ))}
    </ul>
  );
}

// Définition du type de props pour sécuriser l'utilisation
ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;