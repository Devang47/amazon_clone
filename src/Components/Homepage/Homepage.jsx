import React from 'react';
import HomepageCards from './HomepageCards';
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <>
      <section className="product_banner" id="header">
        <Link to="/products">
          <div className="gradient"></div>
        </Link>
      </section>
      <section className="products">
        <div className="cards">
          <HomepageCards />
        </div>
      </section>
      <section className="footer_banner">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Aug_2021/Aug_ART/1150X323_GW_Editorial_NCEMI_AUG._CB645564783_.jpg"
          alt=""
        />
      </section>
    </>
  );
}

export default Homepage;
