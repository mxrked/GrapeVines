import { Component } from "react";

class CartClosing extends Component {
  componentDidMount() {
    const cartDarken = document.getElementById("sCDarken");
    const cartMain = document.getElementById("sCMain");
    const cartContent = document.getElementById("sCCnt");
    const cartCloser = document.getElementById("sCCloser");

    cartDarken.style.display = "none";

    function closeCart() {
      cartDarken.style.pointerEvents = "none";
      cartContent.classList.toggle("deactive");

      setTimeout(() => {
        cartMain.style.width = "0";
      }, 200);

      setTimeout(() => {
        cartDarken.classList.toggle("deactive");
      }, 500);

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 1400);
    }

    window.addEventListener("click", (e) => {
      if (e.target === cartDarken) {
        closeCart();
        localStorage.removeItem("Cart Toggled"); // Prevents the cart from opening when the user did not click the cart toggler
      }
    });
    cartCloser.addEventListener("click", () => {
      closeCart();
      localStorage.removeItem("Cart Toggled"); // Prevents the cart from opening when the user did not click the cart toggler
    });
  }

  render() {
    return "";
  }
}

export default CartClosing;
