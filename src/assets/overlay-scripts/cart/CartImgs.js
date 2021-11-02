/*
!         WARNING: 
!         Some of this code is not really best practice but as of right now it was the only way I could 
!         figure out how to do the adding items to cart and keeping them across pages
*/

import { useEffect } from "react";
import { useLocation } from "react-router";

const CartImgs = () => {
  function cartImgSelecting(iimg, isrc) {
    document.querySelectorAll(iimg).forEach((e) => {
      // img.style.backgroundColor = isrc;
      e.style.backgroundImage = `url(${isrc})`;
    });
  }

  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");

    // Changes img props when the user reaches the shopping cart
    if (location.pathname.indexOf("/wines") > -1) {
      //* Reds
      cartImgSelecting(
        "#cartItem1 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/red/red-1.jpg"
      );
      cartImgSelecting(
        "#cartItem2 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/red/red-2.jpg"
      );
      cartImgSelecting(
        "#cartItem3 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/red/red-3.jpg"
      );

      //* Roses
      cartImgSelecting(
        "#cartItem4 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/rose/rose-1.jpg"
      );
      cartImgSelecting(
        "#cartItem5 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/rose/rose-2.jpg"
      );
      cartImgSelecting(
        "#cartItem6 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/rose/rose-3.jpg"
      );

      //* Sparkling
      cartImgSelecting(
        "#cartItem7 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/sparkling/sparkling-1.jpg"
      );
      cartImgSelecting(
        "#cartItem8 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/sparkling/sparkling-2.jpg"
      );
      cartImgSelecting(
        "#cartItem9 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/sparkling/sparkling-3.jpg"
      );

      //* Whites
      cartImgSelecting(
        "#cartItem10 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/white/white-1.jpg"
      );
      cartImgSelecting(
        "#cartItem11 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/white/white-2.jpg"
      );
      cartImgSelecting(
        "#cartItem12 .cart-item-img",
        "http://basicallyeasy.com/DynamicCDNS/grapevines/sc-imgs/white/white-3.jpg"
      );
    }

    return () => {
      "";
    };
  }, [location]);

  return "";
};

export default CartImgs;
