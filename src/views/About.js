import { Fragment } from "react";

import AOSMain from "../assets/ext-scripts/aos/AOSMain";
import AOSMobileFix from "../assets/ext-scripts/aos/AOSMobileFix";

//! Assets
//* Overlay
import PageEntrySetUp from "../assets/overlay-scripts/page-entry/PageEntrySetUp";

//* Cross Page
import TitleChanger from "../assets/crosspage-scripts/TitleChanger";
import PageTransitions from "../assets/crosspage-scripts/PageTransitions";

//* Search
import SearchSetUp from "../assets/overlay-scripts/search/SearchSetUp";
import B2TSetUp from "../assets/overlay-scripts/b2t/B2TSetUp";

//* Cart
import CartToggler from "../assets/overlay-scripts/cart/CartToggler";
import CartMain from "../assets/overlay-scripts/cart/CartMain";
import CartClosing from "../assets/overlay-scripts/cart/CartClosing";

//! Components
//* Nav
import NavSetUp from "../components/nav-comps/NavSetUp";

//* About
import AboutTop from "../components/page-comps/about/AboutTop";
import AboutSectOne from "../components/page-comps/about/about-sects/AboutSectOne";
import AboutSectTwo from "../components/page-comps/about/about-sects/AboutSectTwo";
import AboutSectThree from "../components/page-comps/about/about-sects/AboutSectThree";

//* Footer
import FooterMain from "../components/footer-comps/FooterMain";

const AboutView = () => {
  return (
    <div id="mainBody" className="page-transition">
      <TitleChanger />
      <PageTransitions />
      <PageEntrySetUp />

      <CartToggler />
      <CartMain />
      <Fragment>
        <CartClosing />
      </Fragment>

      <SearchSetUp />
      <B2TSetUp />

      <AOSMain />
      <AOSMobileFix />

      <div id="aTopHolder">
        <NavSetUp />
        {/*<div id="dummy"></div>*/}
        <AboutTop />
      </div>

      <AboutSectOne />
      <AboutSectTwo />
      <AboutSectThree />

      <FooterMain />
    </div>
  );
};

export default AboutView;
