import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ equipment, addToFavorites }) => {
  const handleAddToFavorites = () => {
    addToFavorites(equipment);
    alert(`Adding ${equipment.name} to favorites`);
  };

 
  const imagePath = "/images/doctor.jpg";

  return (
    <div className="card">
      <img src={imagePath} alt={equipment.name} className="equipment-image"/>
      <h2>
        <Link to={`/equipment/${equipment.id}`}>{equipment.name}</Link>
      </h2>
      <p>{equipment.description}</p>
      <div className="card-bottom">
        <button onClick={handleAddToFavorites}>
          <img src="/images/ico-star.png" alt="Star Icon" width="20" height="20"/>
        </button>
        <Link to={`/equipment/${equipment.id}`}>View details</Link>
      </div>
    </div>
  );
};

export default Card;






