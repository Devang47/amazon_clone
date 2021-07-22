import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import LocationBox from "./Components/LocationBox";
import "./Styles/style.css";

function App() {
  const [locationBox, setLocationBox] = useState(true);
  const [location, setLocation] = useState('');
  return (
    <>
      <Navbar location={location} setLBox={setLocationBox} />
      {locationBox ? <LocationBox /> : ""}
    </>
  );
}

export default App;
