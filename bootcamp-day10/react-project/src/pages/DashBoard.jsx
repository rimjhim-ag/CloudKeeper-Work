import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const DashBoard = ({handleLogout}) => {

  const navigate = useNavigate();
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#282c34",
    borderBottom: "2px solid #444",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background 0.3s ease",
  };

  const activeLinkStyle = {
    backgroundColor: "#61dafb",
    color: "#000",
  };

  const onLogout = () =>{
       handleLogout();
       navigate("/");


  }

  return (
    <>

    <div
  onClick={onLogout}
  style={{
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 20px",
    cursor: "pointer",
  }}
>
  <img
    src="src/assets/login.svg"

    alt="logout"
    style={{
      width: "40px",
      height: "40px",
      // makes it circular if square
     
   
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";

    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "scale(1)";
     
    }}
  />
</div>

      <header
        style={{
          backgroundColor: "#20232a",
          color: "#61dafb",
          textAlign: "center",
          padding: "20px 0",
          fontSize: "24px",
          fontWeight: "bold",
          width: "500px",
        }}
      >
        Dashboard Navigation


      </header>

      <nav style={navStyle}>
        <NavLink
          to="counter"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Counter
        </NavLink>

        <NavLink
          to="digital-watch"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Digital Watch
        </NavLink>
      </nav>

      <div
        style={{
          textAlign: "center",
          padding: "40px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default DashBoard;
