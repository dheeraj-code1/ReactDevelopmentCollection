import { useState } from "react";


function App() {
  let [color, setColor] = useState("#121212");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2   py-2 w-90">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-5 py-2">
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "green" }}
          onClick={ () => setColor("green") 
          }>
            Green
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "blue" }}
            onClick={ () => setColor("blue") }
          >
            Blue
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "red" }}
            onClick={ () => setColor("red") }
          >
            Red
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "pink" }}
            onClick={ () => setColor("pink") }
          >
            Pink
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "yellow" }}
            onClick={ () => setColor("yellow") }
          >
            Yellow
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "purple" }}
            onClick={ () => setColor("purple") }
          >
            Purple
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "orange" }}
            onClick={ () => setColor("orange") }
          >
            Orange
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "cyan" }}
            onClick={ () => setColor("cyan") }
          >
            Cyan
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "indigo" }}
            onClick={ () => setColor("indigo") }
          >
            Indigo
          </button>
          <button
            className="py-1 px-5 rounded-3xl"
            style={{ backgroundColor: "gray" }}
            onClick={ () => setColor("gray") }
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
