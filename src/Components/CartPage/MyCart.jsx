import CartItem from './CartItem';
import NoCartSection from './NoCartSection';
import { numberWithCommas } from '../../utils';
import { useCartStore } from '../../store';

function MyCart() {
  const cartItems = useCartStore(state => state.cartItems);

  const totalItems = cartItems.reduce((prev, curr) => prev + curr.qty, 0);
  const totalPrice = cartItems.reduce(
    (prev, curr) => prev + curr.qty * curr.price,
    0,
  );
  const hasFreeDelivery = cartItems.some(i => i.price > 500);

  return (
    <section className="cart__containerGrid">
      <div className="cart__leftCol">
        {cartItems.length === 0 ? (
          <NoCartSection />
        ) : (
          <div className="cart__itemWrapper">
            <h1>Shopping Cart</h1>
            {cartItems.map(c => (
              <CartItem key={`cart_item_${c.id}`} item={c} />
            ))}
            <div className="subTotal">
              Subtotal ({totalItems} items): ₹{numberWithCommas(totalPrice)}
            </div>
          </div>
        )}
      </div>
      <div className="cart__rightCol">
        <div className="a-section a-spacing-base a-text-center">
          <img
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          />
        </div>
        <div className="cart__proceed">
          {hasFreeDelivery && (
            <div className="free-delivery">
              <span
                className="iconify"
                data-icon="mdi:check-circle"
                data-inline="false"
                data-height="18px"
                data-width="18px"
              ></span>
              <span className="text">
                Your order is eligible for FREE delivery
              </span>
            </div>
          )}
          <p className="proceed_subTotal">
            Subtotal ({totalItems} items): ₹{numberWithCommas(totalPrice)}
          </p>
          <a href="/" className="sign_in_btn">
            Proceed to Buy
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyCart;
