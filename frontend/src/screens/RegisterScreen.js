import { Link } from "react-router-dom";
const RegisterScreen = () => {
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
              <div className="card">
                <div className="card-body">
                  <form>
                  <div className="form-group">
                      <label htmlFor="passwordTextInput">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name..."
                        aria-label="Lastname"
                        id="passwordTextInput"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordTextInput">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name..."
                        aria-label="Lastname"
                        id="passwordTextInput"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailTextInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                        aria-label="Firstname"
                        id="emailTextInput"
                        required
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
                    Have an account? <Link to="/register">Sign in</Link>{" "}
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

export default RegisterScreen;
