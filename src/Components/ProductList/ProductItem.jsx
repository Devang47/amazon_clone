import { numberWithCommas } from '../../utils';
import Rating from './Rating';

function formatDate(dt) {
  return dt.toLocaleString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function ProductItem({ product }) {
  const priceWithoutDiscount = parseInt(
    (product.price * 100) / (100 - product.discount),
  );
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + product.deliveryDays);

  return (
    <div className="item">
      <div className="featured_product_img">
        <img src={product.image} alt="product" />
      </div>
      <div className="details">
        <h2 className="title">{product.name}</h2>
        {/* <h3 className="description">{product.description}</h3> */}
        <div
          className="rating"
          title={`${product.stars.toFixed(1)} out of 5.0 (${
            product.numReviews
          } ratings)`}
        >
          <Rating stars={product.stars} />{' '}
          <span
            class="iconify"
            data-icon="akar-icons:chevron-down"
            data-inline="true"
          ></span>{' '}
          <span className="reviews">
            {numberWithCommas(product.numReviews)}
          </span>
        </div>
        {/* <div className="paperback">Paperback</div> */}
        <div className="limited_deal">Limited time deal</div>
        <div className="cost">
          <span className="currency_sign">₹</span>
          {numberWithCommas(product.price)}
          {product.discount > 0 && (
            <>
              <span className="strike">
                ₹{numberWithCommas(priceWithoutDiscount)}
              </span>
              <span className="saveSpan">
                Save ₹{numberWithCommas(priceWithoutDiscount - product.price)} (
                {product.discount}%)
              </span>
            </>
          )}
        </div>
        <div className="delivery_time">
          {/* need to get prime image here */}
          {product.fullfilled && 'prime'} Get it by{' '}
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
