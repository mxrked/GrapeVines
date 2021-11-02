import { Component } from "react";

import ResetWineCatBtns from "./btns/ResetWineCatBtns";

import ShowReds from "./showing/ShowReds";
import ShowRoses from "./showing/ShowRoses";
import ShowSparkling from "./showing/ShowSparkling";
import ShowWhites from "./showing/ShowWhites";

import HideReds from "./hiding/HideReds";
import HideRoses from "./hiding/HideRoses";
import HideSparkling from "./hiding/HideSparkling";
import HideWhites from "./hiding/HideWhites";

class WineURLType extends Component {
  componentDidMount() {
    const wineCategoryBtns = document.querySelectorAll(".wines-category-btn");

    var globalURL = window.location.href.toLowerCase();

    function checkingURL() {
      switch (true) {
        case globalURL.indexOf("/wines#w0") > -1:
          ResetWineCatBtns();
          wineCategoryBtns[0].classList.toggle("disable-btn");
          ShowReds();
          ShowRoses();
          ShowSparkling();
          break;
        case globalURL.indexOf("/wines#w1") > -1:
          ResetWineCatBtns();
          wineCategoryBtns[1].classList.toggle("disable-btn");
          ShowReds();
          HideRoses();
          HideSparkling();
          break;
        case globalURL.indexOf("/wines#w2") > -1:
          ResetWineCatBtns();
          wineCategoryBtns[2].classList.toggle("disable-btn");
          ShowRoses();
          HideReds();
          HideSparkling();
          break;
        case globalURL.indexOf("/wines#w3") > -1:
          ResetWineCatBtns();
          wineCategoryBtns[3].classList.toggle("disable-btn");
          ShowSparkling();
          HideReds();
          HideRoses();
          break;
        case globalURL.indexOf("/wines#w4") > -1:
          ResetWineCatBtns();
          wineCategoryBtns[4].classList.toggle("disable-btn");
          ShowWhites();
          HideReds();
          HideRoses();
          HideSparkling();
          break;
      }
    }

    checkingURL();
  }

  render() {
    return "";
  }
}

export default WineURLType;
