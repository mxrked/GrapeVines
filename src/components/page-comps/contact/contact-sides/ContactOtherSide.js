import { Link } from "react-router-dom";
import {
  FaAt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const ContactOtherSide = () => {
  return (
    <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 order-lg-last order-md-last order-sm-last order-last contact-main-side">
      <div className="contact-main-side-cnt">
        <div id="contactOtherSideCnt">
          <div className="contact-other-side-set">
            <div className="contact-other-side-group">
              <a href="#" className="contact-other-side-link page-transition">
                <FaPhoneAlt className="fa-icon" /> +1 202-555-0018
              </a>
              <a
                href="mailTo:contact@basicallyeasy.com"
                className="contact-other-side-link page-transition"
              >
                <FaAt className="fa-icon" /> contact@basicallyeasy.com
              </a>
            </div>
          </div>
          <div className="contact-other-side-set">
            <div className="contact-other-side-group">
              <div className="contact-other-side-group-inner">
                <a href="#" className="contact-other-side-link page-transition">
                  <FaTwitter className="fa-icon" /> Twitter
                </a>
                <a href="#" className="contact-other-side-link page-transition">
                  <FaFacebook className="fa-icon" /> Facebook
                </a>
              </div>

              <div className="contact-other-side-group-inner">
                <a href="#" className="contact-other-side-link page-transition">
                  <FaLinkedin className="fa-icon" /> LinkedIn
                </a>
                <a href="#" className="contact-other-side-link page-transition">
                  <FaGithub className="fa-icon" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOtherSide;
