import React, { useState } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
const App = () => {
  const [inp, setInp] = useState("HELLO WORLD");
  const [speed, setSpeed] = useState(50);
  const [loading, setLoading] = useState(false);

  async function sayHello() {
    setLoading(true);

    for (let i = 0; i < inp.length; i++) {
      let box = document.getElementById(`box${i}`);

      for (let j = 65; j < 65 + 26; j++) {
        let temp = String.fromCharCode(j);
        box.textContent = temp;

        if (inp[i] === temp || inp[i] === " ") {
          box.textContent = inp[i] === " " ? " " : temp;
          break;
        }

        // Adding a delay
        await new Promise((resolve) => setTimeout(resolve, Number(speed)));
      }
    }
    setLoading(false);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      ({" "}
      <div
        style={{
          display: "flex",
          pointerEvents: loading ? "none" : "all",
          opacity: loading ? ".7" : "1",
        }}
      >
        )
        <input
          type="text"
          style={{
            padding: "8px",
            fontSize: "1rem",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            color: "gray",
          }}
          value={inp.toUpperCase()}
          onChange={({ target }) => setInp(target.value)}
        />
        <button
          style={{
            padding: "8px 10px",
            fontSize: "1rem",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "0 1rem",
            background: "white",
          }}
          onClick={sayHello}
        >
          Start
        </button>
        <div
          style={{
            background: "white",
            width: "max-content",
            borderRadius: "5px",
            padding: "0 8px",
          }}
        >
          <select
            style={{
              WebkitAppearance: "none",
              padding: "8px",
              fontSize: "1rem",
              outline: "none",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onChange={({ target }) => setSpeed(target.value)}
          >
            <option value="50">Fast</option>
            <option value="100">Medium </option>
            <option value="150">Slow</option>
          </select>
          <i className="ri-arrow-drop-down-line"></i>
        </div>
      </div>
      <HelloWorld str={inp} />
    </div>
  );
};

export default App;
