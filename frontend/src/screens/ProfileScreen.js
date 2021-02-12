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

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, userId]);

  console.log(user);

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
              <div className="profile-title text-center pb-3">
                <h1 className="jumbotron-heading text-success">
                  {user.firstname} {user.lastname}
                </h1>
                <h3 className="text-muted">{user.title}</h3>
                <div className="row">
                  <div className="col-md-8 offset-xl-2">
                    <p className="lead text-muted">{user.bio}</p>
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
                      <p className="text-muted">Experience has not been posted</p>
                    ) : (
                      <>
                        <h4>GMetrix LLC</h4>
                        <h6>
                          <strong>Nov. 2019 - Present</strong>
                        </h6>
                        <h6>
                          <em>Lindon, UT</em>
                        </h6>
                        <p>
                          Help in the development of their student panel and
                          course runner. I develope in Reactjs, Redux, ASP.net.
                          I aid in the development of new product pages built in
                          Reactjs.
                        </p>
                      </>
                    )}
                  </section>
                  <section id="profile-education">
                    <h2 className="text-success">Education</h2>
                    <hr className="bg-secondary" />
                    {!user.education ? (
                      <Loader />
                    ) : user.education.length === 0 ? (
                      <p className="text-muted">Education has not been posted</p>
                    ) : (
                      <>
                        <h4>Dev Mountain - iOS Immersive</h4>
                        <h6>
                          <strong>May 2018 - Aug. 2018</strong>
                        </h6>
                        <h6>
                          <em>Salt Lake City, UT</em>
                        </h6>
                        <p>
                          I attended an iOS immersive bootcamp for 3 months. The
                          first 6 weeks, we learned the basics of programming
                          and mobile design. The last 6 - 7 weeks, we did
                          personal projects and group projects with the UI / UX
                          cohorts.
                        </p>
                      </>
                    )}
                  </section>
                  <section id="profile-recent-posts" className="pb-5">
                    <h2 className="text-success">Recent Posts</h2>
                    <hr className="bg-secondary" />
                    <div className="row">
                      <div className="col-md-12">
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
                                <h5 className="card-title">
                                  This is a Post Title Example
                                </h5>
                                <h5 className="text-muted">By Landon McKell</h5>
                                <p className="card-text">
                                  This is a summary of the post. So making sure
                                  that there is a summary field in the object
                                  model will help tremendously for this field.
                                </p>
                                <p className="card-text">
                                  <small className="text-muted">
                                    Posted 3 mins ago
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                                <h5 className="card-title">
                                  Coding in the MERN Stack
                                </h5>
                                <h5 className="text-muted">By Landon McKell</h5>
                                <p className="card-text">
                                  This is a wider card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                  <small className="text-muted">
                                    Posted 3 months ago
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                {/* Tech Stacks - Social Col */}
                <div className="col-lg-4">
                  <section id="profile-tech-stack">
                    <h3 className="text-success">Tech Stacks</h3>
                    <hr className="bg-secondary" />
                    <ul className="text-uppercase">
                      <li>
                        <h4>html</h4>
                      </li>
                      <li>
                        <h4>css</h4>
                      </li>
                      <li>
                        <h4>javascript</h4>
                      </li>
                      <li>
                        <h4>reactjs</h4>
                      </li>
                    </ul>
                  </section>
                  <section id="profile-social">
                    <h3 className="text-success">Social Connections</h3>
                    <hr className="bg-secondary" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <div>LOGO</div>
                        <div>INSTAGRAM</div>
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
