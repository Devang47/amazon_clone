import './Styles/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShowNavFooter from './ShowNavFooter';
import Homepage from './Components/Homepage/Homepage';
import MyCart from './Components/CartPage/MyCart';
import SignIn from './Components/SignIn/SignIn';

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
            {/* Larry your product Component goes here */}
          </Route>
        </Switch>
      </ShowNavFooter>
    </Router>
  );
}

export default App;
