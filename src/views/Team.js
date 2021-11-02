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

//* Team
import TeamTop from "../components/page-comps/team/TeamTop";
import TeamMateOne from "../components/page-comps/team/team-mates/TeamMateOne";
import TeamMateTwo from "../components/page-comps/team/team-mates/TeamMateTwo";
import TeamMateThree from "../components/page-comps/team/team-mates/TeamMateThree";

//* Footer
import FooterMain from "../components/footer-comps/FooterMain";

const TeamView = () => {
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

      <div id="tTopHolder">
        <NavSetUp />
        {/*<div id="dummy"></div>*/}
        <TeamTop />
      </div>

      <TeamMateOne />
      <TeamMateTwo />
      <TeamMateThree />
      {/**/}

      <FooterMain />
    </div>
  );
};

export default TeamView;
