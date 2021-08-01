import { Link } from 'react-router-dom';
import useStore from '../../store';

const NoCartSection = () => {
  const user = useStore(state => state.user);

  return (
    <div className="cart__card">
      <div className="imageCart">
        <span
          className="iconify"
          data-icon="emojione-monotone:shopping-cart"
          data-inline="false"
          data-height="100px"
          data-width="100px"
        ></span>
      </div>
      <div>
        <h1>Your Amazon Basket is empty</h1>
        <p>Shop today's deals</p>
        <div className="signButtons">
          {user ? (
            <Link className="sign_in_btn sign_up_btn" to="/">
              Lets add some items!
            </Link>
          ) : (
            <>
              <Link className="sign_in_btn" to="/signin">
                Sign into your account
              </Link>
              <Link className="sign_in_btn sign_up_btn" to="/register">
                Sign up now
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoCartSection;
