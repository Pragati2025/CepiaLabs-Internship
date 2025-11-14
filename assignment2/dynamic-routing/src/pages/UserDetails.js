import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>🔍 User Details</h2>
        <p>User ID: <strong>{id}</strong></p>

        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
}
