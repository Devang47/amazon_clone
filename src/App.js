import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/style.scss';

import ShowNavFooter from './ShowNavFooter';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';
import ProductList from './Components/ProductList/ProductList';

function App() {
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
            <ProductList />
          </Route>
        </Switch>
      </ShowNavFooter>
    </Router>
  );
}

export default App;
