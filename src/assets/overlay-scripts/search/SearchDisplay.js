import { Component } from "react";

class SearchDisplay extends Component {
  componentDidMount() {
    window.addEventListener("DOMContentLoaded", () => {
      console.log("Search stuff has loaded.");
    });

    const searchToggler = document.getElementById("searchTogglerBtn");

    function checkingScrollForSearchToggler() {
      const wSY = window.scrollY;

      if (wSY <= 201) {
        searchToggler.style.bottom = "20px";
      }

      if (wSY >= 200) {
        searchToggler.style.bottom = "120px";
      }
    }

    checkingScrollForSearchToggler();

    window.addEventListener("scroll", () => {
      checkingScrollForSearchToggler();
    });
  }

  render() {
    return "";
  }
}

export default SearchDisplay;
