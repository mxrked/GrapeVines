import { Component, Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import NavTogglerBtn from "../../assets/nav-scripts/NavTogglerBtn";

class NavSetUp extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <NavLinks />
        </Fragment>

        <div id="navSetUpHolder" className="full-second">
          <div className="container-fluid nav-setup-box page-transition">
            <div className="row nav-setup-row page-transition">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nav-setup-side m-nav-setup-side">
                <div className="nav-setup-side-cnt">
                  <Link to="/home" className="page-transition" id="navLogo">
                    <img
                      data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/vine-art/vine-art-white.png"
                      className="lazyload"
                      alt="Vine Art"
                    />

                    <h1>grapevines</h1>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nav-setup-side"
                id="dNavLinksSide"
              >
                <div className="nav-setup-side-cnt">
                  <ul id="dNavLinks">
                    <li>
                      <Link
                        to="/about"
                        className="nav-setup-link page-transition"
                      >
                        About
                      </Link>
                    </li>
                    <li className="d-nav-dd">
                      <button id="dNavWinesHover">
                        Wines <FaChevronDown />
                      </button>

                      <div id="dNavWinesLinks">
                        <Link to="/wines#w0" className="page-transition">
                          <span>All</span>
                        </Link>
                        <Link to="/wines#w1" className="page-transition">
                          <span>Red</span>
                        </Link>
                        <Link to="/wines#w2" className="page-transition">
                          <span>Rose</span>
                        </Link>
                        <Link to="/wines#w3" className="page-transition">
                          <span>Sparkling</span>
                        </Link>
                        <Link to="/wines#w4" className="page-transition">
                          <span>White</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        className="nav-setup-link page-transition"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="nav-setup-link page-transition"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="mNavLinksSide"
                className="col-sm-6 col-xs-6 nav-setup-side m-nav-setup-side"
              >
                <div className="nav-setup-side-cnt">
                  <button id="navTogglerBtn">
                    <span className="page-transition nav-toggler-bar"></span>
                    <span className="page-transition nav-toggler-bar"></span>
                    <span className="page-transition nav-toggler-bar"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fragment>
          <NavTogglerBtn />
        </Fragment>
      </div>
    );
  }
}

export default NavSetUp;
