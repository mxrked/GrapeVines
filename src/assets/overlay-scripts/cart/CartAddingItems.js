/*

  !         WARNING: 
  !         Some of this code is not really best practice but as of right now it was the only way I could 
  !         figure out how to do the adding items to cart and keeping them across pages

  Creates a dynamic element and adds it to local storage and places it in the shopping cart.
  If the user refreshes the page, it will still be in the cart due to local storage.
  User can delete item from the cart with the item delete btn

*/

import { Component } from "react";

class CartAddingItems extends Component {
  componentDidMount() {
    var cartI;

    //* Creating Items

    const cartItemsHolder = document.getElementById("cartItemsHolder");

    function creatingCartItem(inum, iname) {
      const cartItemShell = document.createElement("div");
      cartItemShell.id = inum;
      cartItemShell.className += "cart-item page-transition";

      const cartItemShellText = document.createElement("h4");
      cartItemShellText.innerHTML = iname;

      const cartItemImg = document.createElement("div");
      cartItemImg.className += "cart-item-img page-transition";

      const deleteItemBtn = document.createElement("button");
      deleteItemBtn.className += "delete-cart-item page-transition";
      deleteItemBtn.innerHTML = "X";

      cartItemShell.appendChild(cartItemImg);
      cartItemShell.appendChild(cartItemShellText);
      cartItemShell.appendChild(deleteItemBtn);
      cartItemsHolder.appendChild(cartItemShell);

      const allDeleteCartItems = document.querySelectorAll(".delete-cart-item");

      allDeleteCartItems.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.closest(".cart-item").style.display = "none";
        });
      });
    }

    //* Removing/Clearing Items and LS
    const allItemAddersClasses =
      document.getElementsByClassName("add-item-btn");
    function restoringItemAdders() {
      for (cartI = 0; cartI < allItemAddersClasses.length; cartI++) {
        allItemAddersClasses[cartI].style.pointerEvents = "auto";
        allItemAddersClasses[cartI].style.opacity = "1";
      }
    }

    function disablingItemAdder(btn) {
      btn.style.pointerEvents = "none";
      btn.style.opacity = ".5";
    }
    function removingLocalStorageItem(e) {
      localStorage.removeItem(e);
    }
    function removingAllLocalStorageItems() {
      //* Reds
      removingLocalStorageItem("Red Wine #1");
      removingLocalStorageItem("Red Wine #2");
      removingLocalStorageItem("Red Wine #3");

      //* Roses
      removingLocalStorageItem("Rose Wine #1");
      removingLocalStorageItem("Rose Wine #2");
      removingLocalStorageItem("Rose Wine #3");

      //* Sparkling
      removingLocalStorageItem("Sparkling Wine #1");
      removingLocalStorageItem("Sparkling Wine #2");
      removingLocalStorageItem("Sparkling Wine #3");

      //* Whites
      removingLocalStorageItem("White Wine #1");
      removingLocalStorageItem("White Wine #2");
      removingLocalStorageItem("White Wine #3");
    }
    function clearingCartItems() {
      const allCartItems = document.getElementsByClassName("cart-item");

      for (cartI = 0; cartI < allCartItems.length; cartI++) {
        allCartItems[cartI].style.display = "none";
      }

      restoringItemAdders();
    }
    const cartClearer = document.getElementById("sCClear");
    cartClearer.addEventListener("click", () => {
      removingAllLocalStorageItems();
      clearingCartItems();
    });

    //* Btns

    const allItemsAdders = document.querySelectorAll(".add-item-btn");

    // Refreshes the browser and removes duplicates
    allItemsAdders.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.reload();
        for (cartI = 0; cartI < allItemAddersClasses.length; cartI++) {
          allItemAddersClasses[cartI].style.pointerEvents = "none";
          allItemAddersClasses[cartI].style.opacity = ".5";
        }
      });
    });

    //* Reds
    allItemsAdders[0].addEventListener("click", () => {
      creatingCartItem("cartItem1", "Red Wine #1");
      addingLocalStorage("Red Wine #1");
      disablingItemAdder(allItemsAdders[0]);
    });
    allItemsAdders[1].addEventListener("click", () => {
      creatingCartItem("cartItem2", "Red Wine #2");
      addingLocalStorage("Red Wine #2");
      disablingItemAdder(allItemsAdders[1]);
    });
    allItemsAdders[2].addEventListener("click", () => {
      creatingCartItem("cartItem3", "Red Wine #3");
      addingLocalStorage("Red Wine #3");
      disablingItemAdder(allItemsAdders[2]);
    });

    //* Roses
    allItemsAdders[3].addEventListener("click", () => {
      creatingCartItem("cartItem4", "Rose Wine #1");
      addingLocalStorage("Rose Wine #1");
      disablingItemAdder(allItemsAdders[3]);
    });
    allItemsAdders[4].addEventListener("click", () => {
      creatingCartItem("cartItem5", "Rose Wine #2");
      addingLocalStorage("Rose Wine #2");
      disablingItemAdder(allItemsAdders[4]);
    });
    allItemsAdders[5].addEventListener("click", () => {
      creatingCartItem("cartItem6", "Rose Wine #3");
      addingLocalStorage("Rose Wine #3");
      disablingItemAdder(allItemsAdders[5]);
    });

    //* Sparkling
    allItemsAdders[6].addEventListener("click", () => {
      creatingCartItem("cartItem7", "Sparkling Wine #1");
      addingLocalStorage("Sparkling Wine #1");
      disablingItemAdder(allItemsAdders[6]);
    });
    allItemsAdders[7].addEventListener("click", () => {
      creatingCartItem("cartItem8", "Sparkling Wine #2");
      addingLocalStorage("Sparkling Wine #2");
      disablingItemAdder(allItemsAdders[7]);
    });
    allItemsAdders[8].addEventListener("click", () => {
      creatingCartItem("cartItem9", "Sparkling Wine #3");
      addingLocalStorage("Sparkling Wine #3");
      disablingItemAdder(allItemsAdders[8]);
    });

    //* Whites
    allItemsAdders[9].addEventListener("click", () => {
      creatingCartItem("cartItem10", "White Wine #1");
      addingLocalStorage("White Wine #1");
      disablingItemAdder(allItemsAdders[9]);
    });
    allItemsAdders[10].addEventListener("click", () => {
      creatingCartItem("cartItem11", "White Wine #2");
      addingLocalStorage("White Wine #2");
      disablingItemAdder(allItemsAdders[10]);
    });
    allItemsAdders[11].addEventListener("click", () => {
      creatingCartItem("cartItem12", "White Wine #3");
      addingLocalStorage("White Wine #3");
      disablingItemAdder(allItemsAdders[11]);
    });

    //* Local Storage
    function addingLocalStorage(istate) {
      localStorage.setItem(istate, true);
    }

    // Checking local storage and preventing the user from adding an item that has already been added
    function checkingLocalStorage() {
      //* Reds
      if (localStorage.getItem("Red Wine #1")) {
        creatingCartItem("cartItem1", "Red Wine #1");
        disablingItemAdder(allItemsAdders[0]);
      }
      if (localStorage.getItem("Red Wine #2")) {
        creatingCartItem("cartItem2", "Red Wine #2");
        disablingItemAdder(allItemsAdders[1]);
      }
      if (localStorage.getItem("Red Wine #3")) {
        creatingCartItem("cartItem3", "Red Wine #3");
        disablingItemAdder(allItemsAdders[2]);
      }

      //* Roses
      if (localStorage.getItem("Rose Wine #1")) {
        creatingCartItem("cartItem4", "Rose Wine #1");
        disablingItemAdder(allItemsAdders[3]);
      }
      if (localStorage.getItem("Rose Wine #2")) {
        creatingCartItem("cartItem5", "Rose Wine #2");
        disablingItemAdder(allItemsAdders[4]);
      }
      if (localStorage.getItem("Rose Wine #3")) {
        creatingCartItem("cartItem6", "Rose Wine #3");
        disablingItemAdder(allItemsAdders[5]);
      }

      //* Sparkling
      if (localStorage.getItem("Sparkling Wine #1")) {
        creatingCartItem("cartItem7", "Sparkling Wine #1");
        disablingItemAdder(allItemsAdders[6]);
      }
      if (localStorage.getItem("Sparkling Wine #2")) {
        creatingCartItem("cartItem8", "Sparkling Wine #2");
        disablingItemAdder(allItemsAdders[7]);
      }
      if (localStorage.getItem("Sparkling Wine #3")) {
        creatingCartItem("cartItem9", "Sparkling Wine #3");
        disablingItemAdder(allItemsAdders[8]);
      }

      //* Whites
      if (localStorage.getItem("White Wine #1")) {
        creatingCartItem("cartItem10", "White Wine #1");
        disablingItemAdder(allItemsAdders[9]);
      }
      if (localStorage.getItem("White Wine #2")) {
        creatingCartItem("cartItem11", "White Wine #2");
        disablingItemAdder(allItemsAdders[10]);
      }
      if (localStorage.getItem("White Wine #3")) {
        creatingCartItem("cartItem12", "White Wine #3");
        disablingItemAdder(allItemsAdders[11]);
      }
    }

    // This will be used to prevent duplicate items in the cart when crossing pages
    checkingPage();
    function checkingPage(e) {
      const globalURL = window.location.href.toLowerCase();

      if (globalURL.indexOf("/home") > -1) {
        clearingCartItems();
        checkingLocalStorage();
      }
      if (globalURL.indexOf("/about") > -1) {
        clearingCartItems();
        checkingLocalStorage();
      }
      if (globalURL.indexOf("/wines") > -1) {
        clearingCartItems();
        checkingLocalStorage();
      }
      if (globalURL.indexOf("/team") > -1) {
        clearingCartItems();
        checkingLocalStorage();
      }
      if (globalURL.indexOf("/contact") > -1) {
        clearingCartItems();
        checkingLocalStorage();
      }
    }

    window.addEventListener("onbeforeunload", () => {
      clearingCartItems();
      removingAllLocalStorageItems();
    });
  }

  render() {
    return "";
  }
}

export default CartAddingItems;
