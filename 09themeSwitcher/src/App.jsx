import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode,setThemeMode]= useState('light')
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }


  // actual change in theme
  useEffect(()=>{
    const elem = document.querySelector('html')
    elem.classList.remove("dark","light")
    elem.classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* ThemeBtn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
              </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
