import { Fragment } from "react";
import { FaChevronUp } from "react-icons/fa";
import B2TDisplay from "./B2TDisplay";

const B2TSetUp = () => {
  return (
    <div>
      <button id="b2TTogglerBtn" className="overlay-btn page-transition">
        <FaChevronUp />
      </button>

      <Fragment>
        <B2TDisplay />
      </Fragment>
    </div>
  );
};

export default B2TSetUp;
