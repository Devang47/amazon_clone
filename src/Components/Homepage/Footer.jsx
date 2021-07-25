import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/main-logo.png';

function Footer() {
  return (
    <>
      <footer>
        {' '}
        <a href="#header">
          <div className="back_to_top">
            <span>Back to top</span>
          </div>
        </a>
        <div className="footer_links">
          <div className="footer_list" id="footer_list1">
            <ul>
              <li className="bold">Get to Know Us</li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Press Releases</Link>
              </li>
              <li>
                <Link to="#">Amazon Cares</Link>
              </li>
              <li>
                <Link to="#">Gift a Smile</Link>
              </li>
            </ul>
          </div>
          <div className="footer_list" id="footer_list2">
            <ul>
              <li className="bold">Connect with Us</li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="footer_list" id="footer_list3">
            <ul>
              <li className="bold"> Make Money with Us</li>
              <li>
                <Link to="#">Sell on Amazon</Link>
              </li>
              <li>
                <Link to="#"> Sell under Amazon Accelerator</Link>
              </li>
              <li>
                <Link to="#">Amazon Global Selling</Link>
              </li>
              <li>
                <Link to="#">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="#"> Fulfilment by Amazon</Link>
              </li>
              <li>
                <Link to="#">Advertise Your Products</Link>
              </li>
              <li>
                <Link to="#">Amazon Pay on Merchants </Link>
              </li>
            </ul>
          </div>
          <div className="footer_list" id="footer_list4">
            <ul>
              <li className="bold">Let Us Help You</li>
              <li>
                <Link to="#"> COVID-19 and Amazon</Link>
              </li>
              <li>
                <Link to="#"> Your Account</Link>
              </li>
              <li>
                <Link to="#"> Returns Centre</Link>
              </li>
              <li>
                <Link to="#"> 100% Purchase Protection</Link>
              </li>
              <li>
                <Link to="#"> Amazon App Download</Link>
              </li>
              <li>
                <Link to="#"> Amazon Assistant Download</Link>
              </li>
              <li>
                <Link to="#"> Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo_language_region">
          <div className="footer_logo_wrapper">
            <span className="logo">
              <img src={Logo} alt="Amazon logo" />
            </span>
          </div>
          <div className="other_amazon_links">
            <ul>
              <li>
                <Link> Australia</Link>
              </li>
              <li>
                <Link> Brazil</Link>
              </li>
              <li>
                <Link> Canada</Link>
              </li>
              <li>
                <Link> China</Link>
              </li>
              <li>
                <Link> France</Link>
              </li>
              <li>
                <Link> Germany</Link>
              </li>
              <li>
                <Link> Italy</Link>
              </li>
              <li>
                <Link> Japan</Link>
              </li>
              <li>
                <Link> Mexico</Link>
              </li>
              <li>
                <Link> Netherlands</Link>
              </li>
              <li>
                <Link> Poland</Link>
              </li>
              <li>
                <Link> Singapore</Link>
              </li>
              <li>
                <Link> Spain</Link>
              </li>
              <li>
                <Link> United Arab Emirates</Link>
              </li>
              <li>
                <Link> United Kingdom</Link>
              </li>
              <li>
                <Link> United States</Link>
              </li>
              <li>
                <Link> Japan</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
            <ul>
                <li>
                    <Link>Conditions of Use & Sale</Link>
                </li>
                <li>
                    <Link>Privacy Notice</Link>
                </li>
                <li>
                    <Link>Interest-Based Ads</Link>
                </li>
                <li>
                    1996-2021, Amazon.com, Inc. or its affiliates 
                </li>
            </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
