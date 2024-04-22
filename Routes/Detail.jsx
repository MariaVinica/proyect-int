import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EquipmentDetail = () => {
  const { id } = useParams();
  const [equipmentDetail, setEquipmentDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/equipments/${id}`)
      .then((response) => {
        setEquipmentDetail(response.data);
      })
      .catch((error) => {
        console.error('Error getting details from equipment:', error);
      });
  }, [id]);

  const renderDetailTable = () => {
    if (!equipmentDetail) {
      return <p>Loading equipment information...</p>;
    }

    return (
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
            <tr>
              <td>{equipmentDetail.name}</td>
              <td>{equipmentDetail.description}</td>
              <td>${equipmentDetail.price}</td>
            </tr>
          </tbody>
        </table>
    );
  };

  return (
    <div>
      <h1>Equipment Information</h1>
      {renderDetailTable()}
    </div>
  );
};

export default EquipmentDetail;


