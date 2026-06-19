import React, { useState, useEffect } from "react";
import API from "../services/api";
import SearchBar from "../components/SearchBar";

function FoundItems() {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "",
    location: ""
  });

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const fetchItems = async () => {
    try {
      const res = await API.get("/items");
      const foundItems = res.data.filter(
        (item) => item.status === "Found"
      );
      setItems(foundItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/items/add", {
        ...formData,
        status: "Found"
      });

      alert("Found Item Submitted Successfully!");
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #43e97b, #38f9d7)",
        padding: "40px"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "500px",
          margin: "auto"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#00b894" }}>
          Report Found Item
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="location"
            placeholder="Found Location"
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Found Item
          </button>
        </form>
      </div>

      <h2 style={{ textAlign: "center", color: "white", marginTop: "40px" }}>
        Found Items List
      </h2>

      <SearchBar search={search} setSearch={setSearch} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredItems.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h3>{item.itemName}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#00b894",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "250px"
};

export default FoundItems;