/*

    This script is made seperately so the Adding Items script isnt cluttered. 

*/

import { Component } from "react";

class CartDeletingItems extends Component {
  componentDidMount() {
    const allItemAdders = document.querySelectorAll(".add-item-btn");
    function deletingCartItem(item, ls, adder) {
      document.querySelectorAll(`${item} button`).forEach((btn) => {
        btn.addEventListener("click", () => {
          localStorage.removeItem(ls);
          adder.style.pointerEvents = "auto";
          adder.style.opacity = "1";
        });
      });
    }

    //* Reds
    deletingCartItem("#cartItem1", "Red Wine #1", allItemAdders[0]);
    deletingCartItem("#cartItem2", "Red Wine #2", allItemAdders[1]);
    deletingCartItem("#cartItem3", "Red Wine #3", allItemAdders[2]);

    //* Roses
    deletingCartItem("#cartItem4", "Rose Wine #1", allItemAdders[3]);
    deletingCartItem("#cartItem5", "Rose Wine #2", allItemAdders[4]);
    deletingCartItem("#cartItem6", "Rose Wine #3", allItemAdders[5]);

    //* Sparklings
    deletingCartItem("#cartItem7", "Sparkling Wine #1", allItemAdders[6]);
    deletingCartItem("#cartItem8", "Sparkling Wine #2", allItemAdders[7]);
    deletingCartItem("#cartItem9", "Sparkling Wine #3", allItemAdders[8]);

    //* Whites
    deletingCartItem("#cartItem10", "White Wine #1", allItemAdders[9]);
    deletingCartItem("#cartItem11", "White Wine #2", allItemAdders[10]);
    deletingCartItem("#cartItem12", "White Wine #3", allItemAdders[11]);
  }
  render() {
    return "";
  }
}

export default CartDeletingItems;
