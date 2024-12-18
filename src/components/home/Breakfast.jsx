import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../../Api';
import './FoodList.css';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseurl}/Food/Foodview`)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  // Function to convert Buffer to Base64
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return window.btoa(binary);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Food Items</h1>
      <div className="food-list">
        {foods.map((food, index) => (
          <div key={index} className="food-card">
            <h2>{food.Fname}</h2>
            <p>{food.Description}</p>
            <p>Price: ${food.Price}</p>
            {food.photo && food.photo.data && (
              <img
                src={`data:${food.photo.contentType};base64,${arrayBufferToBase64(food.photo.data.data)}`}
                alt={food.Fname}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
