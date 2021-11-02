import { Link } from "react-router-dom";

const IndexAbout = () => {
  return (
    <div id="indexAboutHolder">
      <div
        className="index-about-bg a-fade"
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="400"
        id="indexAboutBG1"
      ></div>
      <div
        className="index-about-bg a-fade"
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="400"
        id="indexAboutBG2"
      ></div>

      <div className="page-transition" id="indexAbout">
        <div
          className="container-fluid index-about-box page-transition a-fade"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          <div className="row index-about-row page-transition">
            <div className="col-lg-12 index-about-side page-transition">
              <div className="index-about-text">
                <h3>
                  All about <br /> grapevines.
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est.
                </p>

                <div>
                  <Link to="/wines#w0" className="page-transition">
                    View Wines
                  </Link>
                  <Link to="/about" className="page-transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexAbout;
