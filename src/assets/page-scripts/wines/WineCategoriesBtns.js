import { Component } from "react";

import ResetWineCatBtns from "./btns/ResetWineCatBtns";

// Shows
import ShowReds from "./showing/ShowReds";
import ShowRoses from "./showing/ShowRoses";
import ShowSparkling from "./showing/ShowSparkling";
import ShowWhites from "./showing/ShowWhites";

// Hides
import HideReds from "./hiding/HideReds";
import HideRoses from "./hiding/HideRoses";
import HideSparkling from "./hiding/HideSparkling";
import HideWhites from "./hiding/HideWhites";

class WineCategoriesBtns extends Component {
  componentDidMount() {
    const winesHeroBtn = document.getElementById("winesTopBtn");
    const wineCategoryBtns = document.querySelectorAll(".wines-category-btn");

    function disableWineCategoryBtn(btn) {
      btn.classList.toggle("disable-btn");
    }

    // This will prevent the whites items when the whites items btn is not selected, from not showing on other categories
    const globalURL = window.location.href.toLowerCase();

    if (!globalURL.indexOf("wines#w4") > -1) {
      HideWhites();
    }

    if (globalURL.indexOf("wines#w0") > -1) {
      ShowWhites();
    }

    function hideAll() {
      HideReds();
      HideRoses();
      HideSparkling();
      HideWhites();
    }

    function showAll() {
      ShowReds();
      ShowRoses();
      ShowSparkling();
      ShowWhites();
    }

    wineCategoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        ResetWineCatBtns();
      });
    });

    winesHeroBtn.addEventListener("click", () => {
      ResetWineCatBtns();
      console.log("Showing all wines");
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[0]);
      }, 200);
      showAll();
    });

    wineCategoryBtns[0].addEventListener("click", () => {
      console.log("Showing all wines");
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[0]);
      }, 100);
      showAll();
    });

    wineCategoryBtns[1].addEventListener("click", () => {
      console.log("Showing red wines");
      hideAll();
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[1]);
      }, 100);

      ShowReds();
    });

    wineCategoryBtns[2].addEventListener("click", () => {
      console.log("Showing rose wines");
      hideAll();
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[2]);
      }, 100);

      ShowRoses();
    });

    wineCategoryBtns[3].addEventListener("click", () => {
      console.log("Showing sparkling wines");
      hideAll();
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[3]);
      }, 100);
      ShowSparkling();
    });

    wineCategoryBtns[4].addEventListener("click", () => {
      console.log("Showing white wines");
      hideAll();
      setTimeout(() => {
        disableWineCategoryBtn(wineCategoryBtns[4]);
      }, 100);

      ShowWhites();
    });
  }

  render() {
    return "";
  }
}

export default WineCategoriesBtns;
