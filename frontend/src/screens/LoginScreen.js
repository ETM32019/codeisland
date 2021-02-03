import { Link } from "react-router-dom";
const LoginScreen = () => {
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
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="emailTextInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                        aria-label="Firstname"
                        id="emailTextInput"
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
