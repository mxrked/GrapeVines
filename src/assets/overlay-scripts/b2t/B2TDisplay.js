import { Component } from "react";

class B2TDisplay extends Component {
  componentDidMount() {
    const b2TToggler = document.getElementById("b2TTogglerBtn");

    function checkingScrollForBTTToggler() {
      const wSY = window.scrollY;

      if (wSY <= 201) {
        b2TToggler.style.bottom = "-50px";
        b2TToggler.classList.toggle("disable-btn");
      }

      if (wSY >= 200) {
        b2TToggler.style.bottom = "50px";

        setTimeout(() => {
          b2TToggler.classList.remove("disable-btn");
        }, 200);
      }
    }

    b2TToggler.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    checkingScrollForBTTToggler();

    window.addEventListener("scroll", () => {
      checkingScrollForBTTToggler();
    });
  }

  render() {
    return "";
  }
}

export default B2TDisplay;
