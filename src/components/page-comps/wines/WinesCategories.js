import { Fragment } from "react";
import { Link } from "react-router-dom";

import WineCategoriesBtns from "../../../assets/page-scripts/wines/WineCategoriesBtns";
import WineURLType from "../../../assets/page-scripts/wines/WineURLType";

const WinesCategories = () => {
  return (
    <div id="winesCategoriesHolder">
      <div className="wines-categories-box page-transition">
        <Link
          to="/wines#w0"
          id="wAllBtn"
          className="wines-category-btn page-transition"
        >
          Show All
        </Link>
        <Link
          to="/wines#w1"
          id="wRedBtn"
          className="wines-category-btn page-transition"
        >
          Show Red
        </Link>
        <Link
          to="/wines#w2"
          id="wRoseBtn"
          className="wines-category-btn page-transition"
        >
          Show Rose
        </Link>
        <Link
          to="/wines#w3"
          id="wSparklingBtn"
          className="wines-category-btn page-transition"
        >
          Show Sparkling
        </Link>
        <Link
          to="/wines#w4"
          id="wWhiteBtn"
          className="wines-category-btn page-transition"
        >
          Show White
        </Link>
      </div>

      <Fragment>
        <WineCategoriesBtns />
        <WineURLType />
      </Fragment>
    </div>
  );
};

export default WinesCategories;
