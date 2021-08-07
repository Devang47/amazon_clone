import { Link } from 'react-router-dom';
import { formatDate, numberWithCommas } from '../../utils';
import Rating from './Rating';

function ProductItem({ product }) {
  const priceWithoutDiscount = parseInt(
    (product.price * 100) / (100 - product.discount),
  );
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + product.deliveryDays);

  return (
    <div className="item">
      <div className="featured_product_img">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="product" />
        </Link>
      </div>
      <div className="details">
        <h2 className="title">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h2>
        <Link
          to={`/products/${product.id}`}
          className="rating"
          title={`${product.stars.toFixed(1)} out of 5.0 (${
            product.numReviews
          } ratings)`}
        >
          <Rating stars={product.stars} />
          <span
            className="iconify"
            data-icon="akar-icons:chevron-down"
            data-inline="true"
          ></span>
          <span className="reviews">
            {numberWithCommas(product.numReviews)}
          </span>
        </Link>
        {/* <div className="paperback">Paperback</div> */}
        <div className="limited_deal">Limited time deal</div>
        <div className="cost">
          <Link to={`/products/${product.id}`}>
            <span className="currency_sign">₹</span>
            {numberWithCommas(product.price)}
          </Link>
          {product.discount > 0 && (
            <>
              <Link to={`/products/${product.id}`} className="strike">
                ₹{numberWithCommas(priceWithoutDiscount)}
              </Link>
              <span className="saveSpan">
                Save ₹{numberWithCommas(priceWithoutDiscount - product.price)} (
                {product.discount}%)
              </span>
            </>
          )}
        </div>
        <div className="delivery_time">
          {/* need to get prime image here */}
          {product.fullfilled && <i className="prime"></i>} Get it by
          <strong> {formatDate(deliveryDate)} </strong>
        </div>
        <div className="free_delivery">
          {product.price > 500 && 'FREE Delivery by Amazon'}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
