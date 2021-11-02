import { Link } from "react-router-dom";

const IndexWinesUT = () => {
  return (
    <div id="indexWinesUTHolder">
      <div
        className="index-wines-ut-background a-fade"
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="400"
      ></div>

      <div id="indexWinesUT">
        <div
          className="container-fluid index-wines-ut-box page-transition a-fade"
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-duration="500"
          id=""
        >
          <div className="row index-wines-ut-row page-transition">
            <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12 order-lg-first order-md-first order-sm-last order-last page-transition index-wines-ut-side">
              <div className="index-wines-ut-side-bgs">
                <div
                  className="index-wines-ut-bg lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/wines-under-top/vertical.jpg"
                ></div>
                <div
                  className="index-wines-ut-bg lazyload"
                  data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/wines-under-top/horizontal.jpg"
                ></div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-8 col-xs-12 order-lg-last order-md-last order-sm-first order-first page-transition index-wines-ut-side">
              <div className="index-wines-ut-text">
                <div>
                  <h3>we promise to have something to your taste.</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>

                  <Link to="/wines#w0" className="page-transition">
                    View Wines
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

export default IndexWinesUT;
