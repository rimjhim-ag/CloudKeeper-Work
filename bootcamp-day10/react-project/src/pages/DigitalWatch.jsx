import React, { useEffect, useState } from 'react'

const DigitalWatch = () => {
  const [counter, setCounter] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "#61dafb",
        padding: "30px",
        borderRadius: "12px",
        display: "inline-block",
        fontSize: "22px",
        letterSpacing: "1px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      Live Clock  : {counter.toLocaleTimeString()}
    </div>
  );
};

export default DigitalWatch;
