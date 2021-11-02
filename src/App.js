import React, { Component, Fragment } from "react";
// Style Sheets
import "./scss/layouts/nav.css";
import "./scss/layouts/sects.css";
import "./scss/layouts/footer.css";
import "./responsive/nav-resp.css";
import "./responsive/index-resp.css";
import "./responsive/about-resp.css";
import "./responsive/wines-resp.css";
import "./responsive/team-resp.css";
import "./responsive/contact-resp.css";
import "./responsive/footer-resp.css";
import "./responsive/js-resp.css";

// Ext Libs
import { HashRouter, Switch, Route, useLocation } from "react-router-dom";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";

import "bootstrap/dist/css/bootstrap.min.css";
/* import {Carousel, Container, Row, Col} */

import { Helmet, HelmetProvider } from "react-helmet-async";

import AOSMain from "./assets/ext-scripts/aos/AOSMain";
import AOSMobileFix from "./assets/ext-scripts/aos/AOSMobileFix";

// Views
import AboutView from "./views/About";
import WinesView from "./views/Wines";
import TeamView from "./views/Team";
import ContactView from "./views/Contact";

//! Assets

//* Overlay
import PageEntrySetUp from "./assets/overlay-scripts/page-entry/PageEntrySetUp";

//* Cross page
import TitleChanger from "./assets/crosspage-scripts/TitleChanger";
import PageTransitions from "./assets/crosspage-scripts/PageTransitions";
import WineURLType from "./assets/page-scripts/wines/WineURLType";

//* Side Btns
import SearchSetUp from "./assets/overlay-scripts/search/SearchSetUp";
import B2TSetUp from "./assets/overlay-scripts/b2t/B2TSetUp";

//* Cart
import CartToggler from "./assets/overlay-scripts/cart/CartToggler";
import CartMain from "./assets/overlay-scripts/cart/CartMain";
import CartClosing from "./assets/overlay-scripts/cart/CartClosing";
import CartAddingItems from "./assets/overlay-scripts/cart/CartAddingItems";
import CartDeletingItems from "./assets/overlay-scripts/cart/CartDeletingItems";

//! Components
//* Nav
import NavSetUp from "./components/nav-comps/NavSetUp";

//* Index
import IndexTop from "./components/page-comps/index/IndexTop";
import IndexWinesUT from "./components/page-comps/index/IndexWinesUT";
import IndexAbout from "./components/page-comps/index/IndexAbout";
import IndexWinesMain from "./components/page-comps/index/IndexWinesMain";
import IndexContact from "./components/page-comps/index/IndexContact";
import IndexTeam from "./components/page-comps/index/IndexTeam";

//* Footer
import FooterMain from "./components/footer-comps/FooterMain";
import FalseBtns from "./assets/crosspage-scripts/FalseBtns";
import CartImgs from "./assets/overlay-scripts/cart/CartImgs";

const AppStuff = () => {
  const location = useLocation();
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          {" "}
          <title>grapevines | Home Page</title>
          <meta
            name="keywords"
            content="wine, alcohol, red wine, rose wine, sparkling wine, white wine"
          ></meta>
          <meta
            name="description"
            content="We are sure you will find something to your liking. From out selections of red, rose, sparkling and white wines; something will get your tastebuds going."
          ></meta>
        </Helmet>
      </HelmetProvider>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={HomeView} />
        <Route path="/home" exact component={HomeView} />
        <Route path="/about" extact component={AboutView} />
        <Route path="/wines" extact component={WinesView} />
        <Route path="/team" extact component={TeamView} />
        <Route path="/contact" extact component={ContactView} />
      </Switch>
      <WineURLType />
      <CartAddingItems />
      <CartDeletingItems />
      <CartImgs />
      <FalseBtns />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppStuff />
      </HashRouter>
    );
  }
}

//! Components
const HomeView = () => (
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
    </Fragment>
    <AOSMain />
    <AOSMobileFix />
    <div id="iTopHolder">
      <NavSetUp />
      {/*<div id="dummy"></div>*/}
      <IndexTop />
    </div>
    <IndexWinesUT />
    <IndexAbout />
    <IndexWinesMain />
    <IndexContact />
    <IndexTeam />
    <FooterMain />
  </div>
);

export default App;
