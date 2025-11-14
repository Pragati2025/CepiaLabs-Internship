import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div>
      <h2>404 — Page Not Found</h2>
      <p>Sorry, we couldn't find the page you requested.</p>
      <p><Link to="/">Go back home</Link></p>
    </div>
  );
}
