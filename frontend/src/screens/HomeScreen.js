import HeroSlider from "../components/HeroSlider";

const HomeScreen = () => {
  return (
    <>
    {/* Hero Slider Section */}
    <section>
        <HeroSlider />
    </section>
      {/* Features Section */}
      <section>
        <div className="container p-0">
          <div className="row p-0 text-center align-items-stretch">
            <div className="col-lg-3 col-md-6 p-0">
              <div className="p-5 bg-primary text-white h-100">
                <h3>Our Community</h3>
                <p className="mb-0 text-small">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod te
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="p-5 bg-secondary text-white h-100">
                <h3>Connect</h3>
                <p className="mb-0 text-small">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod te
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0 order-md-4 order-lg-3">
              <div className="p-5 bg-primary text-white h-100">
                <h3>Share</h3>
                <p className="mb-0 text-small">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod te
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0 order-md-3 order-lg-4">
              <div className="p-5 bg-secondary text-white h-100">
                <h3>Social</h3>
                <p className="mb-0 text-small">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod te
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
