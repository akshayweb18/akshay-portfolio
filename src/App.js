import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contactus from './Contactus';
import { Route, Routes } from "react-router-dom";
import Project from './Project';

function App() {
  const [colors, setColors] = useState(false);

  const switchColor = () => {
    setColors(!colors);
  };

  return (
    <>
      <Navbar switchColor={switchColor} colors={colors} />

      <Routes>
        <Route index element={<Home colors={colors} />} />
        <Route path="/Home" element={<Home colors={colors} />} />
        <Route path="/Contactus" element={<Contactus   colors={colors}  />} />
        <Route path="/Project" element={<Project  colors={colors}  />} />
      </Routes>

    </>
  );
}

export default App;
