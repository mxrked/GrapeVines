import { Component } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

class SearchLinks extends Component {
  componentDidMount() {
    const searchLinksHold = document.getElementById("searchLinksHolder");
    const searchLinksContent = document.getElementById("searchLinksCnt");

    const searchBar = document.getElementById("searchInput");
    const searchSubmit = document.getElementById("searchGo");
    var searchI;

    searchLinksHold.style.display = "none";
    searchLinksHold.classList.toggle("deactive");
    searchLinksContent.classList.toggle("deactive");

    const searchToggler = document.getElementById("searchTogglerBtn");
    const searchCloser = document.getElementById("searchCloserBtn");
    searchToggler.style.pointerEvents = "auto";
    searchCloser.style.pointerEvents = "none";

    searchToggler.addEventListener("click", () => {
      searchToggler.style.pointerEvents = "none";
      searchLinksHold.style.display = "grid";

      setTimeout(() => {
        searchLinksHold.classList.remove("deactive");
      }, 700);

      setTimeout(() => {
        searchLinksContent.classList.remove("deactive");
        searchCloser.style.pointerEvents = "auto";
      }, 1600);
    });

    searchCloser.addEventListener("click", () => {
      searchCloser.style.pointerEvents = "none";
      searchLinksContent.classList.toggle("deactive");
      setTimeout(() => {
        searchLinksHold.classList.toggle("deactive");
      }, 1100);

      setTimeout(() => {
        searchToggler.style.pointerEvents = "auto";
      }, 1400);
    });

    //* This will be used to filter out the non relevant links when the user types into the search bar
    function filterSearchLinks() {
      const filter = searchBar.value.toUpperCase();
      const searchList = document.getElementById("searchLinks");
      const searchListLi = searchList.getElementsByTagName("li");
      let searchListA;
      let searchTxtVal;

      for (searchI = 0; searchI < searchListLi.length; searchI++) {
        searchListA = searchListLi[searchI].getElementsByTagName("a")[0];
        searchTxtVal = searchListA.textContent || searchListA.innerText;

        if (searchTxtVal.toUpperCase().indexOf(filter) > -1) {
          searchListLi[searchI].style.display = "";
        } else {
          searchListLi[searchI].style.display = "none";
        }
      }
    }

    //* This will be used to detect whether or not the dev or user is in localhost or live(hosting server) mode
    function checkingHosting() {
      if (window.location.hostname === "localhost") {
        //checkingLocalHostURLS();
        console.log("User is on LOCALHOST");
      }

      if (window.location.hostname === "127.0.0.1") {
        //checkingLocalHostURLS();
        console.log("User is on LOCALHOST");
      }

      if (window.location.hostname !== "localhost") {
        checkingServerURLS();
        console.log("User is on HOSTING SERVER");
      }

      if (window.location.hostname !== "127.0.0.1") {
        checkingServerURLS();
        console.log("User is on HOSTING SERVER");
      }
    }

    //* This will be used to cycle through the website with the search field in Development Mode. The average user wont see this..
    /*
    function checkingLocalHostURLS() {
      const lSURL = window.location;
      const lSSIVal = searchBar.value.toLowerCase();

      switch (true) {
        case lSSIVal.indexOf("home") > -1:
          lSURL.assign("/react-projects/grapevines/#/home");
          break;
        case lSSIVal.indexOf("about") > -1:
          lSURL.assign("/react-projects/grapevines/#/about");
          break;
        case lSSIVal.indexOf("all wines") > -1:
          lSURL.assign("/react-projects/grapevines/#/wines#w0");
          break;
        case lSSIVal.indexOf("red wines") > -1:
          lSURL.assign("/react-projects/grapevines/#/wines#w1");
          break;
        case lSSIVal.indexOf("rose wines") > -1:
          lSURL.assign("/react-projects/grapevines/#/wines#w2");
          break;
        case lSSIVal.indexOf("sparkling wines") > -1:
          lSURL.assign("/react-projects/grapevines/#/wines#w3");
          break;
        case lSSIVal.indexOf("white wines") > -1:
          lSURL.assign("/react-projects/grapevines/#/wines#w4");
          break;
        case lSSIVal.indexOf("team") > -1:
          lSURL.assign("/react-projects/grapevines/#/team");
          break;
        case lSSIVal.indexOf("contact") > -1:
          lSURL.assign("/react-projects/grapevines/#/contact");
          break;
        default:
          console.log("Could not find a link");
          break;
      }
    }

    */

    //* This is the same as checkingLocalHostURLS() but instead of localhost, its for the hosting server. The average user will be using this..
    function checkingServerURLS() {
      const severHost = "http://basicallyeasy.com/react-projects/grapevines/#/";
      const sURL = window.location;
      const sSIVal = searchBar.value.toLowerCase();

      switch (true) {
        case sSIVal.indexOf("home") > -1:
          sURL.assign(`${severHost}home`);
          break;
        case sSIVal.indexOf("about") > -1:
          sURL.assign(`${severHost}about`);
          break;
        case sSIVal.indexOf("all wines") > -1:
          sURL.assign(`${severHost}wines#w0`);
          break;
        case sSIVal.indexOf("red wines") > -1:
          sURL.assign(`${severHost}wines#w1`);
          break;
        case sSIVal.indexOf("rose wines") > -1:
          sURL.assign(`${severHost}wines#w2`);
          break;
        case sSIVal.indexOf("sparkling wines") > -1:
          sURL.assign(`${severHost}wines#w3`);
          break;
        case sSIVal.indexOf("white wines") > -1:
          sURL.assign(`${severHost}wines#w4`);
          break;
        case sSIVal.indexOf("team") > -1:
          sURL.assign(`${severHost}team`);
          break;
        case sSIVal.indexOf("contact") > -1:
          sURL.assign(`${severHost}contact`);
          break;
        default:
          console.log("Could not find a link");
          break;
      }
    }

    searchBar.addEventListener("keyup", filterSearchLinks);
    searchBar.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkingHosting();
      }
    });
    searchSubmit.addEventListener("click", checkingHosting);
  }

  render() {
    return (
      <div>
        <div className="full-second" id="searchLinksHolder">
          <div className="search-links-cnt page-transition" id="searchLinksCnt">
            <div className="search-links-cnt-inner">
              <span className="page-transition" id="searchCloserBtn">
                <FaTimes className="fa-icon" /> Close{" "}
              </span>

              <div>
                <button id="searchGo" className="page-transition">
                  <FaSearch />
                </button>

                <input
                  type="text"
                  className="page-transition"
                  autoComplete="off"
                  id="searchInput"
                  placeholder="search.."
                />
              </div>

              <ul id="searchLinks">
                <li className="search-link-li">
                  <Link to="/home" className="page-transition search-link">
                    Home
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/about" className="page-transition search-link">
                    About
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/wines#w0" className="page-transition search-link">
                    All Wines
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/wines#w1" className="page-transition search-link">
                    Red Wines
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/wines#w2" className="page-transition search-link">
                    Rose Wines
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/wines#w3" className="page-transition search-link">
                    Sparkling Wines
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/wines#w4" className="page-transition search-link">
                    White Wines
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/team" className="page-transition search-link">
                    Team
                  </Link>
                </li>
                <li className="search-link-li">
                  <Link to="/contact" className="page-transition search-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchLinks;
