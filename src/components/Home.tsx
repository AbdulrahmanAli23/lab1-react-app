import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Home Component</h2>
      <p>Counter Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
