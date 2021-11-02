import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaAt,
  FaPhoneAlt,
} from "react-icons/fa";

const FooterBottomRow = () => {
  return (
    <div id="footerBottomRow">
      <div className="container-fluid footer-bottom-box page-transition">
        <div className="row footer-bottom-row page-transition">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer-bottom-side">
            <div className="footer-bottom-side-inner">
              <div className="footer-bottom-creator">
                <h3>Created by Parker Phelps.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
                <div>
                  <a href="#" className="footer-creator-link page-transition">
                    <FaFacebook />
                  </a>
                  <a href="#" className="footer-creator-link page-transition">
                    <FaTwitter />
                  </a>
                  <a href="#" className="footer-creator-link page-transition">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="footer-creator-link page-transition">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer-bottom-side">
            <div className="footer-bottom-side-inner">
              <div className="footer-bottom-contact">
                <div>
                  <a
                    href="mailTo:contact@basicallyeasy.com"
                    className="page-transition footer-contact-link"
                  >
                    <FaAt />

                    <p>contact@basicallyeasy.com</p>
                  </a>
                </div>

                <div>
                  <a href="#" className="page-transition footer-contact-link">
                    <FaPhoneAlt />

                    <p>+1202-555-0860</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomRow;
