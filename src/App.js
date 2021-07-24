import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import LocationBox from "./Components/Navbar/LocationBox";
import "./Styles/style.css";
import Homepage_Products from "./Components/Homepage/Homepage-products";

function App() {
  const routes = ["/register", "/signin"];
  const location = useLocation();
  const [locationBox, setLocationBox] = useState(false);
  const [user_location, setUserLocation] = useState("Select your address");
  return (
    <>
      {!routes.includes(location.pathname) && (
        <Navbar location={user_location} setLBox={setLocationBox} />
      )}
      {locationBox && (
        <LocationBox setLBox={setLocationBox} setLocation={setUserLocation} />
      )}
      <Homepage_Products />
    </>
  );
}

export default App;
