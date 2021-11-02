import { Component } from "react";

class NavToggling extends Component {
  componentDidMount() {
    //* Nav Links
    const navToggler = document.getElementById("navTogglerBtn");
    const navCloser = document.getElementById("navCloserBtn");
    const navDarken = document.getElementById("navLinksDarken");
    const navLinksHold = document.getElementById("navLinks");
    const navLinksContent = document.getElementById("navLinksCnt");

    navLinksContent.classList.toggle("deactive");
    navDarken.style.display = "none";
    navDarken.classList.toggle("deactive");
    navDarken.style.pointerEvents = "none";
    navToggler.style.pointerEvents = "auto";
    navCloser.style.pointerEvents = "none";

    function openNav() {
      document.body.style.overflowY = "hidden";
      navToggler.style.pointerEvents = "none";

      navDarken.style.display = "block";

      setTimeout(() => {
        navDarken.classList.remove("deactive");
      }, 400);

      setTimeout(() => {
        navLinksHold.style.width = "100%";
      }, 800);

      setTimeout(() => {
        navLinksContent.classList.remove("deactive");
      }, 1600);

      setTimeout(() => {
        navCloser.style.pointerEvents = "auto";
        navDarken.style.pointerEvents = "auto";
      }, 1750);
    }

    navToggler.addEventListener("click", openNav);

    //* Wines
    var winesI;
    const winesToggler = document.getElementById("winesTogglerBtn");
    const winesCloser = document.getElementById("winesCloserBtn");
    const winesLinks = document.getElementsByClassName("m-wines-link");
    const winesLinksTxts = document.getElementsByClassName("m-wines-link-txt");

    winesToggler.style.pointerEvents = "auto";
    winesCloser.style.pointerEvents = "none";

    for (winesI = 0; winesI < winesLinksTxts.length; winesI++) {
      winesLinksTxts[winesI].classList.toggle("deactive");
    }

    winesToggler.addEventListener("click", () => {
      winesToggler.style.pointerEvents = "none";
      winesToggler.style.display = "none";
      winesCloser.style.display = "flex";

      for (winesI = 0; winesI < winesLinks.length; winesI++) {
        winesLinks[winesI].style.height = "50px";
      }

      setTimeout(() => {
        for (winesI = 0; winesI < winesLinksTxts.length; winesI++) {
          winesLinksTxts[winesI].classList.remove("deactive");
        }
      }, 500);

      setTimeout(() => {
        winesCloser.style.pointerEvents = "auto";
      }, 650);
    });
  }

  render() {
    return "";
  }
}

export default NavToggling;
