import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register.js';
import FAQ from './pages/FAQ';
import Models from './pages/Models.js';
import About from './pages/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/bmw-dealership-react-app/home" element={<Home />} />
          <Route path="/bmw-dealership-react-app/register" element={<Register />} />
          <Route path="/bmw-dealership-react-app/faq" element={<FAQ />} />
          <Route path="/bmw-dealership-react-app/models" element={<Models />} />
          <Route path="/bmw-dealership-react-app/about" element={<About />} />
          <Route path="/bmw-dealership-react-app/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
