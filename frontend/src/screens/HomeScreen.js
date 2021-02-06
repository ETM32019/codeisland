import HeroSlider from "../components/HeroSlider";

const HomeScreen = () => {
  return (
    <>
      {/* Hero Slider Section */}
      <header>
        <HeroSlider />
      </header>
      {/* Page Content Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="font-weight-light">Half Page Image Slider</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            auctor ante vitae augue porttitor, rhoncus ultrices sem facilisis.
            Curabitur rhoncus ante purus, euismod bibendum libero hendrerit at.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
