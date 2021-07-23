import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import LocationBox from "./Components/LocationBox";
import "./Styles/style.css";

function App() {
  const [locationBox, setLocationBox] = useState(false);
  const [location, setLocation] = useState("Select your address");
  return (
    <>
      <Navbar location={location} setLBox={setLocationBox} />
      {locationBox && <LocationBox setLBox={setLocationBox} setLocation={setLocation} /> }
     
    </>
  );
}

export default App;
