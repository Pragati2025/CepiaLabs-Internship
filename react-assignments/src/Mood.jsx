import { useState } from "react";

function Mood({ name }) {
  const [mood, setMood] = useState("Happy 😃");

  const toggleMood = () => setMood(mood === "Happy 😃" ? "Sad 😞" : "Happy 😃");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, {name}!</h1>
      <p>My mood is: {mood}</p>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Mood;
