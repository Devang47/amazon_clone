import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../ProductList/Rating';
import { getProductsByCategory } from '../../Data/products';
import { numberWithCommas } from '../../utils';
import './ProductsCarousel.scss';

function ProductItem({ product: p }) {
  return (
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
  );
}

function ProductsCarousel({ category, productId }) {
  const relatedProducts = getProductsByCategory(category, productId);
  const carouselfRef = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    setPos(0);
  }, []);

  const translateX = direction => {
    const count = relatedProducts.length;
    const windowWidth = window.innerWidth;
    if (direction === 'right') {
      const maxItemsInView = windowWidth / 400;
      const triesToScroll = count / maxItemsInView;
      console.log(triesToScroll, pos);
      if (pos + 2 < triesToScroll) setPos(pos + 1);
    } else {
      const translateStyle = carouselfRef.current.style.transform;
      const translatePos = translateStyle
        .replace('translateX(calc(', '')
        .replace('%))', '');
      console.log(translateStyle, translatePos);
      if (!parseInt(translatePos) < 1) {
        setPos(pos - 1);
      }
    }
  };

  return (
    <div className="related_products">
      <header className="carousel_header">
        <h1>Products related to this item</h1>
      </header>
      <ul className="product_carousel">
        <div className="carousel_slider">
          <div
            role="button"
            className="arrow left"
            onClick={() => {
              translateX('left');
            }}
          >
            <span
              className="iconify"
              data-icon="bx:bx-chevron-left-square"
              data-height="40px"
              data-width="40px"
              style={{ color: ' #007185' }}
            ></span>
          </div>
          <div
            ref={carouselfRef}
            className="carousel_content"
            style={{ transform: `translateX(calc( ${-1 * pos * 60}%))` }}
          >
            {relatedProducts.map(p => (
              <ProductItem product={p} key={p.id} />
            ))}
          </div>
          <div
            role="button"
            className="arrow right"
            onClick={() => {
              translateX('right');
            }}
          >
            <span
              className="iconify"
              data-icon="bx:bx-chevron-right-square"
              data-height="40px"
              data-width="40px"
              style={{ color: ' #007185' }}
            ></span>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default ProductsCarousel;
