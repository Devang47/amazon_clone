import { useState } from 'react';
import CartItem from './CartItem';
import NoCartSection from './NoCartSection';
import { numberWithCommas } from './utils';

const dummyCartItems = [
  {
    id: 1,
    name: 'New Apple iPhone 11 (64GB)',
    image: 'https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_AA180_.jpg',
    qty: 1,
    fullfilled: true,
    price: 50999,
  },
  {
    id: 2,
    name: '2020 Apple MacBook Air(13.3- inch / 33.78 cm, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB SSD) - Gold',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_AA180_.jpg',
    qty: 1,
    fullfilled: true,
    price: 92900,
  },
  {
    id: 3,
    name: 'JBL T460BT by Harman, Wireless On Ear Headphones with Mic, Pure Bass, Portable, Lightweight & Flat Foldable, Voice Assistant Support for Mobiles(Black)',
    image: 'https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_AA180_.jpg',
    qty: 1,
    price: 2849,
  },
  {
    id: 4,
    name: 'Sony a7 III Full-Frame Mirrorless Interchangeable-Lens Camera (with 28-70mm F3.5-5.6 OSS Lens)',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91rQ3XfEYzL._SL1500_.jpg',
    qty: 1,
    fullfilled: true,
    price: 25854,
  },
];

function MyCart() {
  const [cartItems, setCartItems] = useState(dummyCartItems);

  const totalItems = cartItems.reduce((prev, curr) => prev + curr.qty, 0);
  const totalPrice = cartItems.reduce(
    (prev, curr) => prev + (curr.qty + curr.price),
    0,
  );
  const hasFreeDelivery = cartItems.some(i => i.price > 500);

  const removeItem = itemId => {
    setCartItems(cartItems.filter(i => i.id !== itemId));
  };

  const changeItemQty = itemId => e => {
    if (e.target.value === '0') {
      removeItem(itemId);
      return;
    } else {
      const itemIdx = cartItems.findIndex(i => i.id === itemId);
      const newItems = cartItems.filter(i => i.id !== itemId);
      newItems.splice(itemIdx, 0, {
        ...cartItems[itemIdx],
        qty: parseInt(e.target.value),
      });
      setCartItems(newItems);
    }
  };

  return (
    <section className="cart__containerGrid">
      <div className="cart__leftCol">
        {cartItems.length === 0 ? (
          <NoCartSection />
        ) : (
          <div className="cart__itemWrapper">
            <h1>Shopping Cart</h1>
            {cartItems.map(c => (
              <CartItem
                key={`cart_item_${c.id}`}
                item={c}
                removeItem={removeItem}
                changeItemQty={changeItemQty}
              />
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
