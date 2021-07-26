import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../Images/main-logo.png';

function isEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getSignInErrors({ email, fullName }) {
  let errorObj = {};
  if (!email) {
    errorObj.email = 'Email is required';
  } else if (!isEmail(email)) {
    errorObj.email = 'Invalid email';
  }

  if (!fullName) {
    errorObj.fullName = 'Full name is required';
  } else if (fullName.length < 3) {
    errorObj.fullName = 'Full name should be at least 3 characters long';
  }
  return errorObj;
}

function SignIn() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    const fieldErrors = getSignInErrors({ email, fullName });

    setErrors(fieldErrors);
    if (
      Object.keys(fieldErrors).length === 0 &&
      fieldErrors.constructor === Object
    ) {
      // form is valid
      localStorage.setItem(
        'user',
        JSON.stringify({ user: { email, fullName } }),
      );
      history.push('/');
    }
  };

  return (
    <main className="signIn__page">
      <div className="signIn__wrapper">
        <Link className="signIn__homeLink" to="/">
          <img src={logo} alt="logo" />
          .in
        </Link>

        <form onSubmit={onSubmit} className="signIn__form">
          <h1>Sign-In</h1>
          <div className="form-control">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />

            <small>{errors.fullName}</small>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small>{errors.email}</small>
          </div>

          <button type="submit" className="sign_in_btn">
            Continue
          </button>
          <small className="signIn__bottomText">
            By continuing, you agree to Amazon's
            <Link to="#">Conditions of Use</Link> and
            <Link to="#">Privacy Notice</Link>.
          </small>
          <Link className="signIn__bottomLink" to="#">
            Forgot password?
          </Link>
        </form>
        <div className="signIn__divider">
          <h5>New to Amazon?</h5>
        </div>
        <Link className="signIn__registerLink" to="#">
          Create your amazon account
        </Link>
      </div>
    </main>
  );
}

export default SignIn;
