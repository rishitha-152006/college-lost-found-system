import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2d3436",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px"
      }}
    >
      <h2>🎯 Lost & Found</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <p>Home</p>
        <p>Lost</p>
        <p>Found</p>
        <p>Dashboard</p>
        <p>Login</p>
      </div>
    </nav>
  );
}

export default Navbar;