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
import CartAddingItems from "../assets/overlay-scripts/cart/CartAddingItems";
import CartDeletingItems from "../assets/overlay-scripts/cart/CartDeletingItems";

/* WinesChecker.js:
        Goes to the desicated wine item from other pages
*/
/* CartCreatingItem.js:
        Creates the different wine items when adding to the shopping cart, 
        along with adding them to local storage.
 */

//! Components
//* Nav
import NavSetUp from "../components/nav-comps/NavSetUp";

//* Wines
import WinesTop from "../components/page-comps/wines/WinesTop";
import WinesCategories from "../components/page-comps/wines/WinesCategories";

//* Footer
import FooterMain from "../components/footer-comps/FooterMain";
import WinesItems from "../components/page-comps/wines/WinesItems";

const WinesView = () => {
  return (
    <div id="mainBody" className="page-transition">
      <TitleChanger />
      <PageTransitions />
      <PageEntrySetUp />

      <SearchSetUp />
      <B2TSetUp />

      <CartToggler />
      <CartMain />
      <Fragment>
        <CartClosing />
        <CartAddingItems />
        <CartDeletingItems />
      </Fragment>

      <AOSMain />
      <AOSMobileFix />

      <div id="wTopHolder">
        <NavSetUp />
        {/*<div id="dummy"></div>*/}
        <WinesTop />
      </div>

      <WinesCategories />
      <WinesItems />

      <FooterMain />
    </div>
  );
};

export default WinesView;
