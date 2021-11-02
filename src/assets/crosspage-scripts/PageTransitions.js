import { Component } from "react";

class PageTransitions extends Component {
  componentDidMount() {
    var pTI;

    // This is for adding a page-transition class to most of the text based content
    function pageHeadings() {
      const allH1s = document.getElementsByTagName("h1");
      const allH2s = document.getElementsByTagName("h2");
      const allH3s = document.getElementsByTagName("h3");
      const allH4s = document.getElementsByTagName("h4");

      //h1's
      for (pTI = 0; pTI < allH1s.length; pTI++) {
        allH1s[pTI].classList.toggle("page-transition");
      }

      //h2's
      for (pTI = 0; pTI < allH2s.length; pTI++) {
        allH2s[pTI].classList.toggle("page-transition");
      }

      //h3's
      for (pTI = 0; pTI < allH3s.length; pTI++) {
        allH3s[pTI].classList.toggle("page-transition");
      }

      //h4's
      for (pTI = 0; pTI < allH4s.length; pTI++) {
        allH4s[pTI].classList.toggle("page-transition");
      }
    }

    function pageParagraphs() {
      const allPs = document.getElementsByTagName("p");

      //p's
      for (pTI = 0; pTI < allPs.length; pTI++) {
        allPs[pTI].classList.toggle("page-transition");
      }
    }

    window.addEventListener("DOMContentLoaded", () => {
      pageHeadings();
      pageParagraphs();
    });
  }
  render() {
    return "";
  }
}

export default PageTransitions;
