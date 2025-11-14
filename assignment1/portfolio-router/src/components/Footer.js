import React from "react";

export default function Footer(){
  return (
    <footer style={{
      marginTop: 30,
      padding: 14,
      borderTop: "1px solid #eee",
      textAlign: "center",
      color: "#666"
    }}>
      © {new Date().getFullYear()} — Your Name
    </footer>
  );
}
