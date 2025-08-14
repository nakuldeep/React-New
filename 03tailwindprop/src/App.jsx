import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-amber-300 text-8xl bg-pink-800 rounded-xl" >cLick me </h1>
    </>
  );
}

export default App;
