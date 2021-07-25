import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import HomepageCards from './HomepageCards';

function Homepage() {
  return (
    <>
      <section className="product_banner" id="header">
        <a href="#">
          <div className="gradient"></div>
        </a>
      </section>
      <section className="products">
        <div className="cards">
          <HomepageCards />
        </div>
      </section>
      <section className="footer_banner">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
