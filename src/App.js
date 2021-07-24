import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import LocationBox from "./Components/Navbar/LocationBox";
import "./Styles/style.css";
import Homepage_Products from "./Components/Homepage/Homepage-products";

function App() {
  const [locationBox, setLocationBox] = useState(false);
  const [location, setLocation] = useState("Select your address");
  return (
    <>
      <Navbar location={location} setLBox={setLocationBox} />
      {locationBox && (
        <LocationBox setLBox={setLocationBox} setLocation={setLocation} />
      )}
      <Homepage_Products />
    </>
  );
}

export default App;
