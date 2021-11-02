import { Component } from "react";

class TitleChanger extends Component {
  componentDidMount() {
    var globalURL = window.location.href;

    function changeTitle() {
      if (globalURL.indexOf("/home") > -1) {
        // alert("home");
        document.title = "grapevines | Home Page";
      }

      if (globalURL.indexOf("/about") > -1) {
        // alert("about");
        document.title = "grapevines | About Page";
      }

      if (globalURL.indexOf("/wines") > -1) {
        // alert("wines");
        document.title = "grapevines | Wines Page";
      }

      if (globalURL.indexOf("/team") > -1) {
        // alert("team");
        document.title = "grapevines | Team Page";
      }

      if (globalURL.indexOf("/contact") > -1) {
        // alert("contact");
        document.title = "grapevines | Contact Page";
      }
    }

    changeTitle();

    setTimeout(() => {
      changeTitle();
    }, 0);
  }

  render() {
    return "";
  }
}

export default TitleChanger;
