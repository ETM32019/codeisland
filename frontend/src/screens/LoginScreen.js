import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {/* Big Banner Section */}
      <section className="bg-dark text-white">
        <div className="container text-center py-4">
          <h1 className="text-uppercase">Sign In</h1>
        </div>
      </section>
      {/* Sign In Form Section */}
      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="emailTextInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                        aria-label="Firstname"
                        id="emailTextInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordTextInput">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password..."
                        aria-label="Lastname"
                        id="passwordTextInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-info btn-block px-5"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="pt-3">
                    Don't have an account? <Link to="/register">Sign up</Link>{" "}
                    here!
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

export default LoginScreen;
