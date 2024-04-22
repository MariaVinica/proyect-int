import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favorites = () => {
  const [favoriteEquipments, setFavoriteEquipments] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('equiposFavoritos');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setFavoriteEquipments(parsedData);
  }, []);

  return (
    <div className="equipment-container">
      <h1>Favorite Medical Equipment</h1>
      <div className="card-grid">
        {favoriteEquipments.map((equipment) => (
          <Card key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

