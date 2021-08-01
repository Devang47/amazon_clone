import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import useStore from '../../store';

import logo from '../../Images/main-logo.png';
import CategoriesNav from './CategoriesNav';
import LocationBox from './LocationBox';

function Navbar(props) {
  // importing State from our zustand store
  const [locationBox, setLocationBox] = useState(false);
  const user = useStore(state => state.user);
  const user_location = useStore(state => state.user_location);
  const setUserLocation = useStore(state => state.setUserLocation);
  const history = useHistory();

    const Query = useStore(state => state.Query);
    const setQuery = useStore(state => state.setQuery)

  return (
    <>
      {/* Location Box Modal goes here */}
      {locationBox && (
        <LocationBox setLBox={setLocationBox} setLocation={setUserLocation} />
      )}
      <nav>
        <div className="upperNav">
          <Link to="/">
            <div className="logo">
              <span>
                <img src={logo} alt="" />
              </span>
            </div>
          </Link>
          <div className="location-box">
            <button onClick={() => setLocationBox(true)}>
              <div className="left">
                <span
                  className="iconify"
                  data-icon="akar-icons:location"
                  data-inline="false"
                ></span>
              </div>
              <div className="right">
                <span className="deliverto">
                  {user_location === 'Select your address'
                    ? 'Hello'
                    : 'Deliver to'}
                </span>
                <span className="location bold">{user_location}</span>
              </div>
            </button>
          </div>
          <div className="searchbox">
            <form onSubmit={(e) => {
              e.preventDefault() 
              history.push('/products')
              }}>
              <label htmlFor="categories">
                <select name="categories" id="categories">
                  <option value="All">1</option>
                  <option value="Clothes">2</option>
                  <option value="Deals">3</option>
                  <option value="Appliances">4</option>
                </select>
              </label>
              <input type="text" value={Query} onChange={(e) => setQuery(e.target.value)} />
              <button className="search-btn" type="submit">
                <span
                  className="iconify"
                  data-icon="mdi:magnify"
                  data-inline="false"
                ></span>
              </button>
            </form>
          </div>
          <div className="country_select">
            <div className="India">
              <span
                className="iconify"
                data-icon="emojione-v1:flag-for-india"
                data-inline="false"
              ></span>
            </div>
          </div>
          <div className="sign_in_section">
            <Link to={user ? '#' : '/signin'}>
              <button>
                <span className="hello">
                  Hello, {user ? user?.username : 'Sign in'}
                </span>
                <span className="list bold">Account & Lists</span>
              </button>
            </Link>
          </div>
          <div className="return_orders">
            <span className="returns">Returns</span>
            <span className="orders bold ">& Orders</span>
          </div>
          <div className="cart">
            <Link to="/cart">
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"
                  fill="#626262"
                />
                <circle cx="10.5" cy="19.5" r="1.5" fill="#626262" />
                <circle cx="17.5" cy="19.5" r="1.5" fill="#626262" />
              </svg>
              <div className="cartItems">0</div>
              <div className="cart_text bold">Cart</div>
            </Link>
          </div>
        </div>
        <CategoriesNav />
      </nav>
    </>
  );
}

export default Navbar;
