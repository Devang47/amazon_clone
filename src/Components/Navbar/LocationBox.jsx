import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LocationBox(props) {
  const [pincode, setPincode] = useState('');

  const getLocation = e => {
    e.preventDefault();

    // To get details about pincode (Indian pincodes only till now)
    if (!isNaN(pincode) && pincode.length >= 6) {
      var options = {
        method: 'GET',
        url: `https://api.postalpincode.in/pincode/${pincode}`,
      };

      axios
        .request(options)
        .then(function (response) {
          props.setLocation(
            response.data[0].PostOffice[0].Region + ' ' + pincode,
          );
          setPincode();
          props.setLBox(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      toast.error('Please enter a valid PinCode!', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <section className="set_location_section">
        <div className="shadow" onClick={() => props.setLBox(false)}></div>
        <div className="box">
          <div className="top_bar bold">Choose your location</div>
          <div className="inner_content">
            <p className="select_a_delivery">
              Select a delivery location to see product availability and
              delivery options
            </p>
            <button className="sign_in_btn">
              Sign in to see your addresses
            </button>
            <span className="or_enter_pincode">or enter an Indian pincode</span>
            <form className="pincode_input" onSubmit={e => getLocation(e)}>
              <input
                type="text"
                value={pincode}
                onChange={e => setPincode(e.target.value)}
              />
              <button className="apply" type="submit">
                Apply
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />;
      </section>
    </>
  );
}

export default LocationBox;
