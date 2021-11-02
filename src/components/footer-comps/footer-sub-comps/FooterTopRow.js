import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";

const FooterTopRow = () => {
  return (
    <div id="footerTopRow">
      <div className="page-transition container-fluid footer-top-box">
        <div className="row footer-top-row page-transition">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer-top-side">
            <div className="footer-top-side-inner">
              <Link to="/home" className="page-transition" id="footerLogo">
                <h1>grapevines</h1>
              </Link>
              <div className="footer-cr">
                <FaCopyright />

                <p>Copyright 2021-2021, All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer-top-side">
            <div className="footer-top-side-inner">
              <ul>
                <li>
                  <Link to="/home" className="footer-link page-transition">
                    home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="footer-link page-transition">
                    about
                  </Link>
                </li>

                <li>
                  <Link to="/team" className="footer-link page-transition">
                    team
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="footer-link page-transition">
                    contact
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/wines#w0" className="footer-link page-transition">
                    all wines
                  </Link>
                </li>
                <li>
                  <Link to="/wines#w1" className="footer-link page-transition">
                    red wines
                  </Link>
                </li>
                <li>
                  <Link to="/wines#w2" className="footer-link page-transition">
                    rose wines
                  </Link>
                </li>
                <li>
                  <Link to="/wines#w3" className="footer-link page-transition">
                    sparkling wines
                  </Link>
                </li>
                <li>
                  <Link to="/wines#w4" className="footer-link page-transition">
                    white wines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopRow;
