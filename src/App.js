import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LocationBox from './Components/Navbar/LocationBox';
import './Styles/style.css';
import HomepageProducts from './Components/Homepage/HomepageProducts';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const location = useLocation();
  const [locationBox, setLocationBox] = useState(false);
  const [user_location, setUserLocation] = useState('Select your address');
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar location={user_location} setLBox={setLocationBox} />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
          <HomepageProducts />
        </Route>
        <Route exact path="/register">
          <HomepageProducts />
          <Navbar location={user_location} setLBox={setLocationBox} />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/cart">
          <Navbar location={user_location} setLBox={setLocationBox} />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
          <MyCart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
