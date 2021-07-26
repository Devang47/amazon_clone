import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStore from './store';

import Navbar from './Components/Navbar/Navbar';
import LocationBox from './Components/Navbar/LocationBox';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';
import Footer from './Components/Homepage/Footer';
import './Styles/style.scss';

function App() {
  const [locationBox, setLocationBox] = useState(false);
  const [user_location, setUserLocation] = useState('Select your address');

  // getting state from zustand store
  const setUserName = useStore(state => state.setUserName);
  const toggleSignIn = useStore(state => state.toggleSignIn);

  // Checking if the User is already Signed in
  useEffect(() => {
    if (localStorage.getItem('user')) {
      let data = JSON.parse(localStorage.getItem('user'))
        .user.fullName.trim()
        .split(' ');

      // setting the username and toggling the SignIn
      setUserName(data[0]);
      toggleSignIn();
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar location={user_location} setLBox={setLocationBox} />
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
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navbar location={user_location} setLBox={setLocationBox} />
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
