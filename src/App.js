import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/style.scss';
import useStore from './store';

import ShowNavFooter from './ShowNavFooter';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';
import ProductList from './Components/ProductList/ProductList';
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  const setQuery = useStore(state => state.setQuery);

  useEffect(() => {
    setQuery('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ShowNavFooter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/cart" component={MyCart} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:productId" component={SingleProduct} />
        </Switch>
      </ShowNavFooter>
    </Router>
  );
}

export default App;
