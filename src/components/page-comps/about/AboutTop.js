import { Link } from "react-router-dom";

const AboutTop = () => {
  return (
    <div id="aboutTopHolder">
      <div
        className="container-fluid about-top-box page-transition lazyload"
        data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/about/about-top-bg.jpg"
      >
        <div className="row about-top-row page-transition">
          <div className="col-lg-12 about-top-side page-transition">
            <div className="about-top-side-cnt">
              <h2>Learn our background.</h2>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>

              <Link to="/wines#w0" className="page-transition">
                View Wines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
