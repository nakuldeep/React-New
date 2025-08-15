import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap  justify-center gap-3 bg-white shadow-lg px-6 py-4 rounded-3xl">
          <button
            className="outline-none px-5 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#B76E79" }}
            onClick={() => changeColor("#B76E79")}
          >
            Gold
          </button>
          <button
            className="outline-none px-5 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#EDE6DB" }}
            onClick={() => setColor("#EDE6DB")}
          >
            Beige
          </button>
          <button
            className="outline-none px-5 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#F2D1C9" }}
            onClick={() => changeColor("#F2D1C9")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
