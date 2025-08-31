import { useState } from "react";

export default function About() {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h2>About Component</h2>
      <button onClick={generateRandom}>Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}
