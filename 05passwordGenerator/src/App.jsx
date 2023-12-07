import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("copy");
  const [color, setColor] = useState("#1976D2");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()[]{}<>,.?/:;|/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    // console.log(pass.length,length);
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  useEffect(() => {
    setCopy("copy");
    setColor("#1976D2");
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-1 text-orange-500  bg-gray-700">
        <h1 className="text-white text-center my-2">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            style={{ backgroundColor: color }}
            className="outline-none bg-blue-700 py-0.5 px-3 shrink-0 text-white"
            onClick={() => {
              copyToClipboard();
              setCopy((prev) => {
                if (prev) {
                  setColor("#4CAF50");
                  return "copied";
                } else {
                  setColor("#1976D2");
                }
                return "copy";
              });
            }}
          >
            {copy}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor=""> Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor=""> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
