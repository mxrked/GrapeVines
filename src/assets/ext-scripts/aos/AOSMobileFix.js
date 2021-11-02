import { Component } from "react";

class AOSMobileFix extends Component {
  componentDidMount() {
    var aI;
    const allAFades = document.getElementsByClassName("a-fade");

    const sMQ = window.matchMedia("(max-width: 991px)");

    if (sMQ.matches) {
      for (aI = 0; aI < allAFades.length; aI++) {
        allAFades[aI].style.transform = "none";
        allAFades[aI].style.opacity = "1";
      }
    }
  }

  render() {
    return "";
  }
}

export default AOSMobileFix;
