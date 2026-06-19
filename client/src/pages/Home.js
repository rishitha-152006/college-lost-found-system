import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        padding: "40px",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
        Lost Something? Found Something?
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Your campus smart solution to report and recover lost belongings.
      </p>

      <div>
        <button
          onClick={() => navigate("/lost")}
          style={{
            padding: "15px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#ff6b6b",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Report Lost Item
        </button>

        <button
          onClick={() => navigate("/found")}
          style={{
            padding: "15px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#1dd1a1",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "15px"
          }}
        >
          Report Found Item
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <input
          type="text"
          placeholder="Search items..."
          style={{
            width: "400px",
            padding: "15px",
            borderRadius: "10px",
            border: "none"
          }}
        />
      </div>

      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "200px"
          }}
        >
          <h3>🎒 Wallet</h3>
          <p>Lost near Library</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "200px"
          }}
        >
          <h3>🪪 ID Card</h3>
          <p>Found near Canteen</p>
        </div>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "15px",
            width: "200px"
          }}
        >
          <h3>📱 Phone</h3>
          <p>Lost in Seminar Hall</p>
        </div>
      </div>
    </div>
  );
}

export default Home;