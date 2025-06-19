import React from 'react';

const FoodCard = ({ item }) => {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <div className="food-content">
        <div className="food-title">{item.name}</div>
        <div className="food-description">{item.description}</div>
        <div className="food-price">{item.price}</div>
      </div>
    </div>
  );
};

export default FoodCard;
