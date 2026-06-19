import React from "react";

function ItemCard({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.name} width="150" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Status: {item.status}</p>
    </div>
  );
}

export default ItemCard;