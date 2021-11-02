import { Component } from "react";

class PageEntryManip extends Component {
  componentDidMount() {
    const pageEntry = document.getElementById("pageEntryHolder");
    const pEY = document.getElementById("pEntryY");
    const pEN = document.getElementById("pEntryN");

    var pEState;

    pEState = true;

    pEY.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      pEState = false;
      window.scrollTo(0, 0);

      determinePageEntryState();
    });

    pEN.addEventListener("click", () => {
      window.location.href = "https://www.google.com/";
      pEState = true;

      determinePageEntryState();
    });

    // This will check if the user has pressed any of the page entry buttons
    determinePageEntryState();
    function determinePageEntryState() {
      if (pEState === false) {
        addingPECookie();
        checkingPECookie();
      }

      if (pEState === true) {
        document.body.style.overflowY = "hidden";
        window.scrollTo(0, 0);
      }
    }

    // Adding cookie :)
    function addingPECookie() {
      window.localStorage.setItem("Page Entry", true);
    }

    // This will check if the pageEntry cookie is added, then hides the page entry
    checkingPECookie();
    function checkingPECookie() {
      if (window.localStorage.getItem("Page Entry")) {
        pageEntry.style.display = "none";
        document.body.style.overflowY = "auto";
      }
    }
  }

  render() {
    return "";
  }
}

export default PageEntryManip;
