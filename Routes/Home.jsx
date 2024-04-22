import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import '../index.css';

const Home = () => {
  const [equipos, setEquipos] = useState([]);
  const [equiposFavoritos, setEquiposFavoritos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/equipments')
      .then((response) => {
        setEquipos(response.data);
      })
      .catch((error) => {
        console.error('Error getting medical equipment list: ', error);
      });
  }, []);

  const addToFavorites = (equipo) => {
    const isAlreadyFavorite = equiposFavoritos.some((favEquipo) => favEquipo.id === equipo.id);

    if (!isAlreadyFavorite) {
      const newFavorites = [...equiposFavoritos, equipo];
      setEquiposFavoritos(newFavorites);
      localStorage.setItem('equiposFavoritos', JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="equipos-container">
      <h1>Available Medical Equipment</h1>
      <div className="card-grid">
        {equipos.map((equipo) => (
          <Card key={equipo.id} equipment={equipo} addToFavorites={() => addToFavorites(equipo)} />
        ))}
      </div>
    </div>
  );
};

export default Home;

