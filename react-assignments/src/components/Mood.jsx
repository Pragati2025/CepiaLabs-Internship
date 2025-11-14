import { useState } from "react";

function Mood({ name }) {
  const [mood, setMood] = useState("Happy 😃");

  const toggleMood = () => setMood(mood === "Happy 😃" ? "Sad 😞" : "Happy 😃");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", 
        width: "100%",       
        textAlign: "center",
      }}
    >
      <h1>Hello, {name}!</h1>
      <p>My mood is {mood}</p>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Mood;
