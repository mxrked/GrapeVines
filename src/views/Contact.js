import { Fragment } from "react";

import AOSMain from "../assets/ext-scripts/aos/AOSMain";
import AOSMobileFix from "../assets/ext-scripts/aos/AOSMobileFix";

//! Assets
//* Overlay
import PageEntrySetUp from "../assets/overlay-scripts/page-entry/PageEntrySetUp";

//* Cross Page
import TitleChanger from "../assets/crosspage-scripts/TitleChanger";
import PageTransitions from "../assets/crosspage-scripts/PageTransitions";

//* Cart
import CartToggler from "../assets/overlay-scripts/cart/CartToggler";
import CartMain from "../assets/overlay-scripts/cart/CartMain";
import CartClosing from "../assets/overlay-scripts/cart/CartClosing";

//* Search
import SearchSetUp from "../assets/overlay-scripts/search/SearchSetUp";
import B2TSetUp from "../assets/overlay-scripts/b2t/B2TSetUp";

//! Components
//* Nav
import NavSetUp from "../components/nav-comps/NavSetUp";

//* Contact
import ContactTop from "../components/page-comps/contact/ContactTop";
import ContactMain from "../components/page-comps/contact/ContactMain";

//* Footer
import FooterMain from "../components/footer-comps/FooterMain";

const ContactView = () => {
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

      <div id="cTopHolder">
        <NavSetUp />
        {/*<div id="dummy"></div>*/}
        <ContactTop />
      </div>

      <ContactMain />

      <FooterMain />
    </div>
  );
};

export default ContactView;
