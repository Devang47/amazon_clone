import { Link } from 'react-router-dom';
import { useCartStore } from '../../store';
import { numberWithCommas } from '../../utils';

function CartItem({ item: c }) {
  const removeItem = useCartStore(state => state.removeItem);
  const changeItemQty = useCartStore(state => state.changeItemQty);
  return (
    <div className="cart__item" key={c.id}>
      <div className="cart__itemImage">
        <img src={c.image} alt={c.name} />
      </div>
      <div className="cart__itemInfo">
        <Link className="cart__itemName" to="/cart">
          {c.name}
        </Link>
        <small className="cart__itemStock">In Stock</small>
        <small className="cart__itemFreeShipping">
          {c.price > 500 && 'Eligible for FREE Shipping'}
        </small>
        {c.fullfilled && (
          <p>
            <img
              className="cart__itemFullfilled"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt="fullfilled"
            />
          </p>
        )}
        <div className="cart__itemActions">
          <select
            name="qty"
            id="qty"
            onChange={e => {
              changeItemQty(c.id, parseInt(e.target.value));
            }}
            value={c.qty}
          >
            {new Array(9).fill(1).map((_, i) => (
              <option key={`${c.id}_${i}`} value={i}>
                {i} {i === 0 && '(Delete)'}
              </option>
            ))}
          </select>
          |
          <Link className="actionLink" to="#" onClick={() => removeItem(c.id)}>
            Delete
          </Link>
          |
          <Link className="actionLink" to="#">
            Save for later
          </Link>
          |
          <Link className="actionLink" to="#">
            See more like this
          </Link>
        </div>
      </div>
      <div className="cart__price">
        <strong>₹{numberWithCommas(c.price.toFixed(2))}</strong>
      </div>
    </div>
  );
}

export default CartItem;
