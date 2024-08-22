import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import LandingPageScreen from "./screens/LandingPageScreen/LandingPageScreen";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import ComponentLibraryScreen from "./screens/ComponentLibraryScreen/ComponentLibraryScreen";
import Navbar from "./components/Navbar/Navbar"; // Import the Navbar component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Pass darkMode and setDarkMode as props */}
        <Routes>
          <Route exact path="/" element={<LoadingScreen />} />
          <Route path="/landing-page" element={<LandingPageScreen darkMode={darkMode} />} />
          <Route path="/component-library" element={<ComponentLibraryScreen darkMode={darkMode} />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
