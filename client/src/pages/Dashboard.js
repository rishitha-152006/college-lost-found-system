import React, { useState, useEffect } from "react";
import API from "../services/api";

function Dashboard() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await API.get("/items");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const lostCount = items.filter(
    (item) => item.status === "Lost"
  ).length;

  const foundCount = items.filter(
    (item) => item.status === "Found"
  ).length;

  const totalCount = items.length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        padding: "40px"
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "50px"
        }}
      >
        <div style={cardStyle}>
          <h2>{lostCount}</h2>
          <p>Total Lost Items</p>
        </div>

        <div style={cardStyle}>
          <h2>{foundCount}</h2>
          <p>Total Found Items</p>
        </div>

        <div style={cardStyle}>
          <h2>{totalCount}</h2>
          <p>Total Items</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  width: "250px",
  textAlign: "center"
};

export default Dashboard;