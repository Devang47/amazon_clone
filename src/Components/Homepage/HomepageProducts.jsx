import React from 'react';
import { Link } from 'react-router-dom';
import HomepageCards from './HomepageCards';

function Products() {
  return (
    <>
      <section className="product_banner">
        <a href="#">
          <div className="gradient"></div>
        </a>
      </section>
      <section className="products">
        <div className="cards">
          <HomepageCards />
        </div>
      </section>
    </>
  );
}

export default Products;
