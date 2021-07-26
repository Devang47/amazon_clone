import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LocationBox from './Components/Navbar/LocationBox';
import './Styles/style.scss';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Homepage />
          <Navbar />
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
          <Navbar />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
          <MyCart />
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navbar />
          {locationBox && (
            <LocationBox
              setLBox={setLocationBox}
              setLocation={setUserLocation}
            />
          )}
          {/* Larry your product Component goes here */}
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
