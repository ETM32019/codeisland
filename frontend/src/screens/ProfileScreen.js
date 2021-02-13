import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch();
  const userId = match.params.id;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, userId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* Jumbotron Section */}
          <section id="profile-jumbotron" className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 text-center">
                  <img
                    src="http://placehold.it/250x250"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <h1 className="text-success">
                        {user.firstname} {user.lastname}
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <h2 className="text-secondary pt-1">{user.title}</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                      <p className="text-secondary">{user.bio}</p>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                      <h6>Phone: {userInfo.phone}</h6>
                      <h6>
                        Email:{" "}
                        <a
                          href={`mailto:${userInfo.email}?subject=From Code Island Profile`}
                        >
                          {userInfo.email}
                        </a>
                      </h6>
                      <h6>
                        Website:{" "}
                        <a href={user.website} rel="noreferrer noopener">
                          {user.website}
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Profile Section */}
          <section id="profile-resume">
            <div className="container">
              <div className="row">
                {/* Exp - Edu - Rec Posts Col */}
                <div className="col-lg-8">
                  <section id="profile-experience">
                    <h2 className="text-success">Experience</h2>
                    <hr className="bg-secondary" />
                    {!user.experience ? (
                      <Loader />
                    ) : user.experience.length === 0 ? (
                      <p className="text-muted">
                        Experience has not been posted
                      </p>
                    ) : (
                      <>
                        {user.experience.map((x, idx) => (
                          <div key={idx}>
                            <h4>{x.title}</h4>
                            <h6>
                              <strong>
                                {x.from} - {x.to}
                              </strong>
                            </h6>
                            <h6>
                              <em>{x.location}</em>
                            </h6>
                            <p>{x.description}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </section>
                  <section id="profile-education">
                    <h2 className="text-success">Education</h2>
                    <hr className="bg-secondary" />
                    {!user.education ? (
                      <Loader />
                    ) : user.education.length === 0 ? (
                      <p className="text-muted">
                        Education has not been posted
                      </p>
                    ) : (
                      <>
                        {user.education.map((x, idx) => (
                          <div key={idx}>
                            <h4>
                              {x.school} - {x.degree}
                            </h4>
                            <h6>
                              <strong>
                                {x.from} - {x.to}
                              </strong>
                            </h6>
                            <h6>
                              <em>{x.location}</em>
                            </h6>
                            <p>{x.description}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </section>
                  <section id="profile-recent-posts" className="pb-5">
                    <h2 className="text-success">Recent Posts</h2>
                    <hr className="bg-secondary" />
                    {!user.post ? (
                      <p className="text-muted">There are no posts</p>
                    ) : user.post.length ? (
                      <Loader />
                    ) : (
                      <div className="row">
                        <div className="col-md-12">
                          {user.posts.map((x, idx) => (
                            <div key={idx}>
                              <div className="card mb-3">
                                <div className="row no-gutters">
                                  <div className="col-md-4">
                                    <img
                                      src="http://placehold.it/500x400"
                                      className="card-img img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <h5 className="card-title">{x.title}</h5>
                                      <h5 className="text-muted">
                                        By {x.user}
                                      </h5>
                                      <p className="card-text">
                                        {x.postdescription}
                                      </p>
                                      <p className="card-text">
                                        <small className="text-muted">
                                          Posted {x.createdAt}
                                        </small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>
                </div>
                {/* Tech Stacks - Social Col */}
                <div className="col-lg-4">
                  <section id="profile-tech-stack">
                    <h3 className="text-success">Tech Stacks</h3>
                    <hr className="bg-secondary" />
                    <ul className="text-uppercase">
                      {!user.skills ? (
                        <Loader />
                      ) : (
                        user.skills.map((x, idx) => (
                          <li key={idx}>
                            <h5>{x}</h5>
                          </li>
                        ))
                      )}
                    </ul>
                  </section>
                  <section id="profile-social">
                    <h3 className="text-success">Social Connections</h3>
                    <hr className="bg-secondary" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <div>INSTAGRAM</div>
                        <div>LOGO</div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <div>LOGO</div>
                        <div>FACEBOOK</div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <div>LOGO</div>
                        <div>LINKEDIN</div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <div>LOGO</div>
                        <div>GITHUB</div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProfileScreen;
