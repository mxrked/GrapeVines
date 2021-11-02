import { Link } from "react-router-dom";

const IndexWinesUS = () => {
  return (
    <div>
      <div id="indexWinesUnderSlick">
        <div className="container-fluid index-wines-under-slick-box page-transition">
          <div className="row index-wines-under-slick-row page-transition">
            <div className="col-lg-12 index-wines-under-slick-side page-transition">
              <div
                className="index-wines-under-slick-cnt"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="700"
              >
                <h3>pick your poison.</h3>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>

                <Link to="/wines#w0" className="page-transition">
                  view wines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexWinesUS;
