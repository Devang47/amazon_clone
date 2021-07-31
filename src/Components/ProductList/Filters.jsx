import { Link } from 'react-router-dom';

function Filters() {
  return (
    <section className="left_section_filters">
      <div className="filters">
        <div className="delivery">
          <span className="title">Delivery date</span>
          <label htmlFor="delivery_day_tomorrow">
            <input type="checkbox" id="delivery_day_tomorrow" /> Get it by
            Tomorrow
          </label>
          <label htmlFor="delivery_day_2_days">
            <input type="checkbox" id="delivery_day_2_days" /> Get it in 2 days
          </label>
        </div>
        <div className="department">
          <span className="title">Department</span>
          <div className="categories">
            <div className="categories_title">Books</div>
            <div className="sub_categories">
              <Link to="#">Health, Family & Tomorrow </Link>
              <Link to="#"> Development </Link>
              <Link to="#"> Business & Economics</Link>
              <Link to="#"> Literature & Fiction</Link>
              <Link to="#">Health, Family & Tomorrow </Link>
              <Link to="#"> Development </Link>
              <Link to="#"> Business & Economics</Link>
              <Link to="#"> Literature & Fiction</Link>
            </div>
          </div>
        </div>
        <div className="price">
          <div className="title">Price</div>
          <Link to="#">Under ₹100 </Link>
          <Link to="#">₹100 - ₹200</Link>
          <Link to="#">₹200 - ₹500</Link>
          <Link to="#">₹500 - ₹1,000</Link>
          <Link to="#">Over ₹1,000</Link>
        </div>
        <div className="new_arrivals">
          <div className="title">New Arrivals</div>
          <Link to="#">Last 30 days</Link>
          <Link to="#"> Last 90 days </Link>
          <Link to="#">Next 90 days</Link>
        </div>
      </div>
    </section>
  );
}

export default Filters;
