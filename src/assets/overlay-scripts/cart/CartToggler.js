import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

class CartToggler extends Component {
  componentDidMount() {
    const cartTogglerBtn = document.getElementById("sCToggler");

    const cartDarken = document.getElementById("sCDarken");
    const cartMain = document.getElementById("sCMain");
    const cartContent = document.getElementById("sCCnt");

    cartDarken.style.pointerEvents = "none";
    cartDarken.style.display = "none";
    cartDarken.classList.toggle("deactive");
    cartContent.classList.toggle("deactive");

    function openCart() {
      document.body.style.overflowY = "hidden";
      console.log("Shopping Cart toggled.");

      cartDarken.style.display = "block";

      setTimeout(() => {
        cartDarken.classList.remove("deactive");
        cartMain.style.width = "100%";
      }, 200);

      setTimeout(() => {
        cartContent.classList.remove("deactive");
      }, 1150);

      setTimeout(() => {
        cartDarken.style.pointerEvents = "auto";
      }, 1300);
    }

    cartTogglerBtn.addEventListener("click", () => {
      openCart();
      // if (window.location.href.toLowerCase().indexOf("#w0") > -1) {
      //   alert("true");
      // }
      localStorage.setItem("Cart Toggled", true); // This will indicate that the user opened the cart across pages
    });

    function checkingCartToggledLS() {
      const globalURL = window.location.href.toLowerCase();

      if (
        localStorage.getItem("Cart Toggled") &&
        globalURL.indexOf("wines") > -1
      ) {
        setTimeout(() => {
          openCart();
        }, 500);
      }

      if (!globalURL.indexOf("wines") > -1) {
        localStorage.removeItem("Cart Toggled");
      }
    }
    checkingCartToggledLS();

    function checkingScrollingForCartToggler() {
      const wSY = window.scrollY;
      if (wSY <= 201) {
        cartTogglerBtn.style.top = "40px";
      }
      if (wSY >= 200) {
        cartTogglerBtn.style.top = "20px";
      }
    }
    checkingScrollingForCartToggler();
    window.addEventListener("scroll", () => {
      checkingScrollingForCartToggler();
    });
  }

  render() {
    return (
      <div>
        {/* Redirects user to store page */}
        <Link to="/wines#w0">
          <button id="sCToggler" className="page-transition">
            <FaShoppingCart />
          </button>
        </Link>
      </div>
    );
  }
}

export default CartToggler;
