import { Link } from "react-router-dom";

const ContactTop = () => {
  return (
    <div id="contactTopHolder">
      <div
        className="container-fluid contact-top-box page-transition lazyload"
        data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/contact/index-contact-bg.jpg"
      >
        <div className="row contact-top-row page-transition">
          <div className="col-lg-12 contact-top-side page-transition">
            <div className="contact-top-side-cnt">
              <h2>Get in touch.</h2>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
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
  );
};

export default ContactTop;
