import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesNav() {
  return (
    <>
      <ul className="categories_nav">
        <li>
          <Link to="/products" className="bold">
            All
          </Link>
        </li>
        <li>
          <Link to="/products">Amazon Pay</Link>
        </li>
        <li>
          <Link to="/products">Mobiles</Link>
        </li>
        <li>
          <Link to="/products">Fashion</Link>
        </li>
        <li>
          <Link to="/products">Electronics</Link>
        </li>
        <li>
          <Link to="/products">New Releases</Link>
        </li>
        <li>
          <Link to="/products">Prime</Link>
        </li>
        <li>
          <Link to="/products">Computers</Link>
        </li>
        <li>
          <Link to="/products">Pet Supplies</Link>
        </li>
        <li>
          <Link to="/products">Health, Household & Personal Care</Link>
        </li>
        <li>
          <Link to="/products">Gift Ideas</Link>
        </li>
        <li>
          <Link to="/products">Customer Service</Link>
        </li>
      </ul>
    </>
  );
}

export default CategoriesNav;
