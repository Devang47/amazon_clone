import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesNav() {
  return (
    <>
      <ul className="categories_nav">
        <li>
          <Link to='#'className="bold">
            All
          </Link>
        </li>
        <li>
          <Link to='#'>Amazon Pay</Link>
        </li>
        <li>
          <Link to='#'>Mobiles</Link>
        </li>
        <li>
          <Link to='#'>Fashion</Link>
        </li>
        <li>
          <Link to='#'>Electronics</Link>
        </li>
        <li>
          <Link to='#'>New Releases</Link>
        </li>
        <li>
          <Link to='#'>Prime</Link>
        </li>
        <li>
          <Link to='#'>Computers</Link>
        </li>
        <li>
          <Link to='#'>Pet Supplies</Link>
        </li>
        <li>
          <Link to='#'>Health, Household & Personal Care</Link>
        </li>
        <li>
          <Link to='#'>Gift Ideas</Link>
        </li>
        <li>
          <Link to='#'>Customer Service</Link>
        </li>
      </ul>
    </>
  );
}

export default CategoriesNav;
