import React from "react";
import './App.css'
import AppRouter from "./Component/AppRouter";
import Footer from "./Component/Footer";
import Logo from "./Component/Logo";
import LogoWhite from "./Component/LogoWhite"
import ReactSwitch from "react-switch"
import SearchButton from "./Component/SearchButton";
import { Router } from "react-router-dom";


export const ThemeContext = React.createContext(null)

const App = () => {

  const storedLightMode = localStorage.getItem("light")
  const [theme, setTheme] = React.useState(storedLightMode)

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  localStorage.setItem("light", theme)



    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div className="switch--toggle">
        <SearchButton />
        <label className="label--switch">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className="switch--control"/>
        </div>
        {theme === 'light' ? <Logo /> : <LogoWhite />}
        <AppRouter />
        <Footer />
      </div>
      </ThemeContext.Provider>
    )
}

export default App