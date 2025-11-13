import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

const Login = ({ handleLogin, isAuthenticated }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onLogin = () => {
    handleLogin();
    navigate("/dashboard");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 60px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
          transition: "transform 0.3s ease",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px" }}>
          Welcome to Landing Page!
        </h1>
        <button
          onClick={onLogin}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
