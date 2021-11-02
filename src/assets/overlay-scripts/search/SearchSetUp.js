import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import SearchDisplay from "./SearchDisplay";
import SearchLinks from "./SearchLinks";

const SearchSetUp = () => {
  return (
    <div>
      <button id="searchTogglerBtn" className="overlay-btn page-transition">
        <FaSearch />
      </button>

      <Fragment>
        <SearchDisplay />
      </Fragment>

      <Fragment>
        <SearchLinks />
      </Fragment>
    </div>
  );
};

export default SearchSetUp;
