import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const RegisterScreen = ({ location, history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(register(firstName, lastName, email, password));
    }
  };

  return (
    <>
      {/* Big Banner Section */}
      <section className="bg-dark text-white">
        <div className="container text-center py-4">
          <h1 className="text-uppercase">Sign Up</h1>
        </div>
      </section>
      {/* Sign In Form Section */}
      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {message && <Message variant="warning">{message}</Message>}
              <div className="card">
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="firstNameTextInput">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name..."
                        aria-label="firstName"
                        id="firstNameTextInput"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastNameTextInput">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name..."
                        aria-label="lastName"
                        id="lastNameTextInput"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailTextInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                        aria-label="email"
                        id="emailTextInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordTextInput">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password..."
                        aria-label="password"
                        id="passwordTextInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPasswordTextInput">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password..."
                        aria-label="password"
                        id="confirmPasswordTextInput"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      className="btn btn-info btn-block px-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="pt-3">
                    Have an account? <Link to="/login">Sign in</Link> here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterScreen;
