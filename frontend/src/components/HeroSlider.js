const Carousel = ({ spacing }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${spacing}`}
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-primary">Welcome to Code Island</h1>
            <h4>Always dedicated and devoted</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn btn-secondary">Sign In</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-primary">Connect</h1>
            <h4>with other engineers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-primary">Share experiences</h1>
            <h4>projects and education with each other</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
