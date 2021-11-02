import { Component, Fragment } from "react";

import PageEntryManip from "./PageEntryManip";

class PageEntrySetUp extends Component {
  render() {
    return (
      <div id="pageEntryHolder">
        <div id="pageEntryDarken" className="full-second"></div>

        <div className="page-transition" id="pageEntryCnt">
          <div className="page-entry-cnt-inner">
            <div
              className="page-entry-bg lazyload"
              data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/overlays/page-entry-bg.jpg"
            ></div>

            <div className="page-entry-text">
              <div className="page-entry-text-inner">
                <h2>Are you 21 years old or older?</h2>

                <p>
                  Be truthful in your decision as under age drinking is illegal
                  in most states.
                </p>

                <div className="page-entry-btns-holder">
                  <button
                    id="pEntryN"
                    className="page-entry-btn page-transition"
                  >
                    No, I am under 21.
                  </button>
                  <button
                    id="pEntryY"
                    className="page-entry-btn page-transition"
                  >
                    Yes, I am 21 or older.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Fragment>
          <PageEntryManip />
        </Fragment>
      </div>
    );
  }
}

export default PageEntrySetUp;
