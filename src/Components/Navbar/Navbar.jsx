import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Images/main-logo.png';
import CategoriesNav from './CategoriesNav';

function Navbar(props) {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      let data = JSON.parse(localStorage.getItem('user')).user.fullName.trim().split(' ')
      setUserName(data[0]);
      setSignIn(true)
    }
  }, []);

  return (
    <>
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
            <button onClick={() => props.setLBox(true)}>
              <div className="left">
                <span
                  className="iconify"
                  data-icon="akar-icons:location"
                  data-inline="false"
                ></span>
              </div>
              <div className="right">
                <span className="deliverto">
                  {props.location === 'Select your address'
                    ? 'Hello'
                    : 'Deliver to'}
                </span>
                <span className="location bold">{props.location}</span>
              </div>
            </button>
          </div>
          <div className="searchbox">
            <form>
              <label htmlFor="categories">
                <select name="categories" id="categories">
                  <option value="All">1</option>
                  <option value="Clothes">2</option>
                  <option value="Deals">3</option>
                  <option value="Appliances">4</option>
                </select>
              </label>
              <input type="text" />
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
            <Link to="/signin">
              <button>
                <span className="hello">
                  Hello, {signIn ? userName : 'Sign in'}
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
