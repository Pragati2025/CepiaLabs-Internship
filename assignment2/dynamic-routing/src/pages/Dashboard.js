import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">

        <h2>Hello </h2>
        <p>Your dynamic dashboard is ready.</p>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link to="profile"><button>Profile</button></Link>
          <Link to="settings"><button>Settings</button></Link>
          <Link to="/user/101"><button>User ID: 101</button></Link>
        </div>

        <button onClick={() => navigate(-1)}>⬅ Go Back</button>

        <hr />
        
        <Outlet />

      </div>
    </div>
  );
}
