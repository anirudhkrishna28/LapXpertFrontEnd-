import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import OwnerShopDetails from './owner/OwnerShopDetails';
import {useNavigate } from 'react-router-dom';

const ShowSmallInfo = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/lap/laptops');
        setLaptops(response.data.laptops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateBigInfo = (laptop) => {
    navigate('/laptop-data', { state: { laptop } });
  };

  return (
    <div className="laptop-list">
      {laptops.map(laptop => (
        <div className="laptop-card" key={laptop.id}>
          <img src={laptop.image_url} alt={laptop.name} />
          <h2>{laptop.name}</h2>
          <p>Description: {laptop.description}</p>
          <p>Rating: {laptop.Rating}</p>
          <button onClick={()=>navigateBigInfo(laptop)}>more info</button>
        </div>
      ))}
    </div>
  );
};

export default ShowSmallInfo;
