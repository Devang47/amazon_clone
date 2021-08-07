import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../Data/products/index';
import { capitalizeFirst, formatDate, numberWithCommas } from '../../utils';
import Rating from '../ProductList/Rating';
import ProductCart from './ProductCart';

function DeliveryFeature() {
  const items = [
    {
      id: '8zeyta-kx8gfg-fjk4h3-8sto0p',
      dataId: 'RETURNS_POLICY',
      name: '7 Days Replacement',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png',
    },
    {
      id: 'ibgdh0-jdltm8-4exan-3k9cpe',
      dataId: 'AMAZON_DELIVERED',
      name: 'Amazon Delivered',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png',
    },
    {
      id: '6h83sn-2ix3xj-piu7hy-gldgb6',
      dataId: 'WARRANTY',
      name: '1 Year Warranty',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png',
    },
    {
      id: 'ka0dd9-f9ibnx-cv0w2n-b0lldt',
      dataId: 'NO_CONTACT_DELIVERY',
      name: 'No-Contact Delivery',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png',
    },
  ];

  return (
    <div className="icon-farm-wrapper">
      {items.map(i => (
        <div
          data-name={i.dataId}
          id={i.dataId}
          class="icon-container"
          data-csa-c-id={i.id}
        >
          <div class="a-section a-spacing-none">
            <img
              src={i.image}
              class="icon-box"
              id=""
              style={{ height: '35px', width: '35px' }}
              alt={i.name}
              data-a-image-source={i.image}
            />
          </div>
          <div class="icon-content">
            <Link class="amz-link" href="#">
              {i.name}{' '}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function SingleProduct() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const priceWithoutDiscount = parseInt(
    (product.price * 100) / (100 - product.discount),
  );
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + product.deliveryDays);

  return (
    <div className="singleProduct">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>
          Category:{' '}
          <Link className="amz-link" to="#">
            {capitalizeFirst(product.category)}
          </Link>
        </p>
        <div className="ratings">
          <Rating stars={product.stars} />
          <span
            className="iconify"
            data-icon="akar-icons:chevron-down"
            data-inline="true"
          ></span>
          <span className="reviews">
            {numberWithCommas(product.numReviews)} ratings
          </span>
        </div>
        {product.fullfilled && (
          <p>
            <img
              className="fullfilled-image"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt="fullfilled"
            />
          </p>
        )}
        <div className="price-details">
          <table>
            <tr>
              <th>M.R.P.:</th>
              <td className="strike">
                ₹{numberWithCommas(priceWithoutDiscount)}
              </td>
            </tr>
            <tr>
              <th>Deal Price:</th>
              <td className="price">₹{numberWithCommas(product.price)}</td>
            </tr>
            <tr>
              <th>You Save:</th>
              <td className="save">
                ₹{numberWithCommas(priceWithoutDiscount - product.price)} (
                {product.discount}%)
              </td>
            </tr>
            <tr>
              <th></th>
              <td>Inclusive of all taxes</td>
            </tr>
          </table>
        </div>
        <p className="delivery-info">
          <span className="free-delivery amz-link">
            {product.price > 500 ? 'FREE Delivery' : 'Delivery at'}:
          </span>
          <strong>{formatDate(deliveryDate)}</strong>
          <span className="amz-link">Details</span>
        </p>
        <DeliveryFeature />
        <span className="stock">In Stock.</span>
        <p>
          Sold by <span className="amz-link">Random Seller</span>
          {product.fullfilled && (
            <span>
              {' '}
              and <span className="amz-link">Fulfilled by Amazon</span>
            </span>
          )}
        </p>
        <p style={{ marginTop: '1rem' }}>
          {product.description} Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nobis corporis dolore eos veritatis deserunt non?
          Consequuntur possimus placeat iste earum at quos facere facilis
          dolores voluptate, libero officiis itaque nesciunt.{' '}
        </p>
      </div>
      <ProductCart product={product} />
    </div>
  );
}

export default SingleProduct;
