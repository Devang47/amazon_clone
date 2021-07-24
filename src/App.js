import React, { useState, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LocationBox from './Components/Navbar/LocationBox';
import './Styles/style.css';
import Homepage_Products from './Components/Homepage/HomepageProducts';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const location = useLocation();
  const [locationBox, setLocationBox] = useState(false);
  const [user_location, setUserLocation] = useState('Select your address');
  return (
    <>
      <Navbar location={user_location} setLBox={setLocationBox} />
      {locationBox && (
        <LocationBox setLBox={setLocationBox} setLocation={setUserLocation} />
      )}
      <Switch>
        <Route exact path="/">
          <Homepage_Products />
        </Route>
        <Route exact path="/register">
          <Homepage_Products />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/cart">
          <MyCart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
