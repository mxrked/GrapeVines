import { Component } from "react";

class NavClosing extends Component {
  componentDidMount() {
    //* Nav Links
    const navToggler = document.getElementById("navTogglerBtn");
    const navCloser = document.getElementById("navCloserBtn");
    const navDarken = document.getElementById("navLinksDarken");
    const navLinksHold = document.getElementById("navLinks");
    const navLinksContent = document.getElementById("navLinksCnt");

    function closeNav() {
      closeWines();
      navLinksContent.classList.toggle("deactive");
      navCloser.style.pointerEvents = "none";
      navDarken.style.pointerEvents = "none";

      setTimeout(() => {
        navLinksHold.style.width = "0";
      }, 600);

      setTimeout(() => {
        navDarken.classList.toggle("deactive");
      }, 800);

      setTimeout(() => {
        navToggler.style.pointerEvents = "auto";
        document.body.style.overflowY = "auto";
      }, 1400);
    }

    navCloser.addEventListener("click", () => {
      closeNav();
    });
    window.addEventListener("click", (e) => {
      if (e.target === navDarken) {
        closeNav();
      }
    });

    //* Wines
    var winesI;
    const winesToggler = document.getElementById("winesTogglerBtn");
    const winesCloser = document.getElementById("winesCloserBtn");
    const winesLinks = document.getElementsByClassName("m-wines-link");
    const winesLinksTxts = document.getElementsByClassName("m-wines-link-txt");

    function closeWines() {
      winesCloser.style.display = "none";
      winesToggler.style.display = "flex";
      for (winesI = 0; winesI < winesLinksTxts.length; winesI++) {
        winesLinksTxts[winesI].classList.toggle("deactive");
      }

      setTimeout(() => {
        for (winesI = 0; winesI < winesLinks.length; winesI++) {
          winesLinks[winesI].style.height = "0px";
        }
      }, 120);

      setTimeout(() => {
        winesToggler.style.pointerEvents = "auto";
      }, 370);
    }

    winesCloser.addEventListener("click", () => {
      closeWines();
    });
  }

  render() {
    return "";
  }
}

export default NavClosing;
