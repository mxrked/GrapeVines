import { Component } from "react";

class NavTogglerBtn extends Component {
  componentDidMount() {
    const navToggler = document.getElementById("navTogglerBtn");
    const navTogglerSpans = document.querySelectorAll(".nav-toggler-bar");

    function slideTogglerSpans(w1, w2) {
      navTogglerSpans[0].style.width = w1;
      navTogglerSpans[2].style.width = w2;
    }

    navToggler.addEventListener("mouseenter", () => {
      slideTogglerSpans("20px", "20px");
    });
    navToggler.addEventListener("click", () => {
      slideTogglerSpans("20px", "20px");
    });
    navToggler.addEventListener("mouseleave", () => {
      slideTogglerSpans("40px", "40px");
    });
  }

  render() {
    return "";
  }
}

export default NavTogglerBtn;
