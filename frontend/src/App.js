import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/teammates")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.teammates);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Team Members</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : data ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {data.map((teammate, index) => (
            <li
              key={index}
              style={{
                background: "#f0f0f0",
                margin: "10px auto",
                padding: "10px",
                borderRadius: "5px",
                maxWidth: "200px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {teammate}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default App;
