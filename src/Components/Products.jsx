import React from "react";

function Products() {
  return (
    <>
      <section className="product_banner">
        <div className="gradient"></div>
      </section>
      <section className="products">
        <div className="cards">
          <div className="item" id="item1">
            <h2>Upgrade your home | Amazon Brands & more</h2>
            <div className="inr_crd">
              <div className="inr_itm inr_itm1">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm2">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm3">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm4">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>
            </div>
          </div>
          <div className="item" id="item2">
            <h2>Upgrade your home | Amazon Brands & more</h2>
            <div className="inr_crd">
              <div className="inr_itm inr_itm1">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm2">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm3">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>

              <div className="inr_itm inr_itm4">
                <a href="#">
                  <span className="img"></span>
                  <span className="caption">Smart LED TVs</span>
                </a>
              </div>
            </div>
          </div>
          <div className="item" id="item3">
            <h2>Exclusively for Prime members</h2>
            <div className="display-img">
              <img src="#" alt="Display Image" />
            </div>
          </div>
          <div className="item" id="item4">
            <h2>Sign in for your best experience</h2>
            <button className='sign_in'>Sign in securely</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
