import React from 'react';
import { Link } from 'react-router-dom';

function HomepageCards(Props) {
  return (
    <>
      <div className="item" id="item1">
        <h2>Upgrade your home | Amazon Brands & more</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>

      <div className="item" id="item2">
        <h2>Top rated, premium quality | Amazon Brands & more</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY327_QL65_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item3">
        <h2>Exclusively for Prime members</h2>
        <div className="banner_img-wrapper">
          <span className="banner_img" src="#" alt="Display Image">
            <img
              src="https://m.media-amazon.com/images/I/51MKXqHKBQL._SX466_.jpg"
              alt="product"
            />
          </span>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item4">
        <h2 className="sign_in_title">Sign in for your best experience</h2>
        <button className="sign_in_btn">Sign in securely</button>
      </div>
      <div className="item" id="item5">
        <h2>Styles for Men | Up to 70% off</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item6">
        <h2>Automotive essentials | Up to 60% off</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item7">
        <h2>Shop by Category</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item8">
        <h2>Top picks for your home ACs</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item9">
        <h2 className="lightH2">Today’s Top Deals</h2>
        <div className="homepage_item_slider">
          {[1, 2, 3, 4, 5].map(e => {
            return (
              <React.Fragment key={e}>
                <Link to="/products/logt234">
                  <div className="slider_item">
                    <div className="item_thumbnail">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/41PDv5n2OgL._SY300_SX300_QL70_FMwebp_.jpg"
                        alt="Item thumbnail"
                      />
                    </div>
                    <div className="item_details">
                      <span className="price_range">
                        <span className="currency_sign">$</span>179.00 -
                        <span className="currency_sign">$</span>20,99.00
                      </span>
                      <br />
                      <span className="timer">Ends in 02:14:34</span>
                    </div>
                  </div>
                </Link>
                <Link to="/products/pou7gy1">
                  <div className="slider_item">
                    <div className="item_thumbnail">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/41KqaHvwcpL._SX300_SY300_QL70_FMwebp_.jpg"
                        alt="Item thumbnail"
                      />
                    </div>
                    <div className="item_details">
                      <span className="price">
                        <span className="currency_sign">$</span>20,99.00
                      </span>
                      <br />

                      <span className="timer">Ends in 02:14:34</span>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="item" id="item10">
        <h2>Effective dishwashing for Indian cooking</h2>
        <div className="banner_img-wrapper">
          <span className="banner_img" src="#" alt="Display Image">
            <img
              src="https://m.media-amazon.com/images/I/51MKXqHKBQL._SX466_.jpg"
              alt="product"
            />
          </span>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item11">
        <h2>Up to 45% off | Bedding & linen | Amazon Brands & more</h2>
        <div className="banner_img-wrapper">
          <span className="banner_img" src="#" alt="Display Image">
            <img
              src="https://m.media-amazon.com/images/I/51MKXqHKBQL._SX466_.jpg"
              alt="product"
            />
          </span>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item12">
        <h2>Flat 50% back on Fruits & vegetables | Amazon Fresh</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>
      <div className="item" id="item12">
        <h2>At home Grooming & Wellness devices</h2>
        <div className="inner_card">
          <div className="inr_itm inr_itm1">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm2">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm3">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>

          <div className="inr_itm inr_itm4">
            <Link to="/products">
              <span className="img">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="product"
                />
              </span>
              <span className="caption">Smart LED TVs</span>
            </Link>
          </div>
        </div>
        <div className="read_more">
          <Link to="/products">See more</Link>
        </div>
      </div>

      <div className="item" id="item13">
        <h2 className="lightH2">
          Curated protective supply products | Amazon Launchpad
        </h2>
        <div className="homepage_item_slider">
          {[1, 2, 3, 4, 5].map(e => {
            return (
              <React.Fragment key={e}>
                <Link to="/products/98dfk21">
                  <div className="slider_item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/I/41PvzSczR2S._SY300_SX300_QL70_FMwebp_.jpg"
                      alt="Product"
                    />
                  </div>
                </Link>
                <Link to="/products/1alf3x2">
                  <div className="slider_item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/I/31LBYv2eEbS._SX300_SY300_QL70_FMwebp_.jpg"
                      alt="Product"
                    />
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="item" id="item14">
        <h2 className="lightH2">Explore everyday essentials</h2>
        <div className="homepage_item_slider">
          {[1, 2, 3, 4, 5].map(e => {
            return (
              <React.Fragment key={e}>
                <Link to="/products">
                  <div className="slider_item">
                    <img
                      src="https://m.media-amazon.com/images/I/71DYAkLrA1L._AC_UL480_QL65_.jpg"
                      alt="Product"
                    />
                  </div>
                </Link>
                <Link to="/products">
                  <div className="slider_item">
                    <img
                      src="https://m.media-amazon.com/images/I/816dGN-lQ3L._AC_UL480_QL65_.jpg"
                      alt="Product"
                    />
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomepageCards;
