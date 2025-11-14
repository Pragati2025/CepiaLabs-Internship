import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Welcome Pragati </h2>
        <p>Please click below to enter your personalized dashboard.</p>

        <button onClick={() => navigate("/dashboard")}>Login</button>
      </div>
    </div>
  );
}
