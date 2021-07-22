import React from "react";

function LocationBox() {
  return (
    <>
      <section className="set_location_section">
        <div className="shadow"></div>
        <div className="box">
          <div className="top_bar">Choose your location</div>
          <div className="inner_content">
            <p className="select_a_delivery">
              Select a delivery location to see product availability and
              delivery options
            </p>
            <button className="sign_in">Sign in to see your addresses</button>
            <span className="or_enter_pincode">or enter an Indian pincode</span>
            <form className="pincode_input">
              <input type="text" />
              <button className="apply">Apply</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocationBox;
