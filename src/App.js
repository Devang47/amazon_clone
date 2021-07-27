import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/style.scss';
import useStore from './store';

import ShowNavFooter from './ShowNavFooter';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';


function App() {
  
  // getting state from zustand store
  const setUserName = useStore(state => state.setUserName);
  const toggleSignIn = useStore(state => state.toggleSignIn);
  
  // Checking if the User is already Signed in
  useEffect(() => {
    console.log('here');
    if (localStorage.getItem('user')) {
      let data = JSON.parse(localStorage.getItem('user'))
        .user.fullName.trim()
        .split(' ');

      // setting the username and toggling the SignIn
      setUserName(data[0]);
      toggleSignIn();
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ShowNavFooter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/register">
            <Homepage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/cart">
            <MyCart />
          </Route>
          <Route exact path="/products">
            {/* Larry your product Component goes here */}
          </Route>
        </Switch>
      </ShowNavFooter>
    </Router>
  );
}

export default App;
