import { Fragment } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import NavToggling from "../../assets/nav-scripts/NavToggling";
import NavClosing from "../../assets/nav-scripts/NavClosing";
import NavTogglerBtn from "../../assets/nav-scripts/NavTogglerBtn";

const NavLinks = () => {
  return (
    <div>
      <div className="full-second" id="navLinksDarken"></div>

      <div id="navLinks" className="full-second">
        <div className="page-transition" id="navLinksCnt">
          <div className="nav-links-top">
            <h1>grapevines</h1>

            <button id="navCloserBtn" className="page-transition">
              Close <FaTimes />
            </button>
          </div>

          <div className="nav-links-body">
            <Link to="/home" className="m-nav-link page-transition">
              Home
            </Link>
            <Link to="/about" className="m-nav-link page-transition">
              About
            </Link>

            <button
              className="m-wines-btn page-transition"
              id="winesTogglerBtn"
            >
              Wines <FaChevronDown />
            </button>
            <button className="m-wines-btn page-transition" id="winesCloserBtn">
              Wines <FaChevronUp />
            </button>

            <div>
              <Link to="/wines#w0" className="m-wines-link page-transition">
                <p className="m-wines-link-txt page-transition">All Wines</p>
              </Link>

              <Link to="/wines#w1" className="m-wines-link page-transition">
                <p className="m-wines-link-txt page-transition">Red Wines</p>
              </Link>

              <Link to="/wines#w2" className="m-wines-link page-transition">
                <p className="m-wines-link-txt page-transition">Rose Wines</p>
              </Link>

              <Link to="/wines#w3" className="m-wines-link page-transition">
                <p className="m-wines-link-txt page-transition">
                  Sparkling Wines
                </p>
              </Link>

              <Link to="/wines#w4" className="m-wines-link page-transition">
                <p className="m-wines-link-txt page-transition">White Wines</p>
              </Link>
            </div>

            <Link to="/team" className="m-nav-link page-transition">
              Team
            </Link>
            <Link to="/contact" className="m-nav-link page-transition">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <Fragment>
        <NavToggling />
      </Fragment>
      <Fragment>
        <NavClosing />
      </Fragment>
      <Fragment>
        <NavTogglerBtn />
      </Fragment>
    </div>
  );
};

export default NavLinks;
