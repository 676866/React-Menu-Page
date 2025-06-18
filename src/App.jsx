import React from 'react';
import "./App.css";
import { foodItems } from "./fooddata";
import FoodCard from "./components/foodcard";

const App = () => {
  return (
    <div>
      <h1> React Hotel Menu</h1>

      <div className="menu-header">
        <div className="categories">
          <span>All</span>
          <span>Drinks</span>
          <span>Pizza</span>
          <span>Salads</span>
          <span>Spicy</span>
          <span>Sweets</span>
        </div>
        <button className="view-all">View All </button>
      </div>

      
      <div className="container">
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
