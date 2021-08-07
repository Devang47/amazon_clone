import { Link } from 'react-router-dom';
import Rating from '../ProductList/Rating';
import { getProductsByCategory } from '../../Data/products';
import { numberWithCommas } from '../../utils';
import './ProductsCarousel.scss';

function ProductsCarousel({ category, productId }) {
  const relatedProducts = getProductsByCategory(category, productId);
  return (
    <div className="related_products">
      <header>
        <h1>Products related to this item</h1>
      </header>
      <ul className="product_carousel">
        {relatedProducts.map(p => (
          <li>
            <div>
              <div className="product_image">
                <img src={p.image} alt={p.name} />
              </div>
              <Link className="amz-link product_name" to={`/products/${p.id}`}>
                {p.name}
              </Link>
            </div>
            <div>
              <Link
                className="no-underline amz-link ratings"
                to={`/products/${p.id}`}
              >
                <Rating stars={p.stars} />
                <span>{p.numReviews}</span>
              </Link>
              <div className="product_pricing">
                <p className="price">₹{numberWithCommas(p.price)}</p>
                {p.fullfilled && <i className="prime"></i>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsCarousel;
