import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        border: "2px solid #61dafb",
        borderRadius: "12px",
        padding: "30px",
        display: "inline-block",
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        Counter : {count}
      </h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={handleIncrease}
          style={{
            backgroundColor: "#61dafb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "transform 0.2s, background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#21a1f1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#61dafb")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Increase
        </button>

        <button
          onClick={handleDecrease}
          style={{
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "transform 0.2s, background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e14d4d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6b6b")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
