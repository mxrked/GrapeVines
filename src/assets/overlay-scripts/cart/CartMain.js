import { Component, Fragment } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import CartAddingItems from "./CartAddingItems";

class CartMain extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="sCDarken" className="full-second"></div>

        <div id="sCMain" className="full-second">
          <div className="page-transition" id="sCCnt">
            <div className="cart-top">
              <button id="sCClear">
                <MdRemoveShoppingCart /> Clear
              </button>

              <button id="sCCloser">
                <FaTimes /> Close
              </button>
            </div>
            <div className="cart-body">
              <h1>Shopping Cart</h1>

              <div id="cartItemsHolder"></div>
            </div>
          </div>
        </div>

        <Fragment>
          <CartAddingItems />
        </Fragment>
      </div>
    );
  }
}

export default CartMain;
