import { Link } from "react-router-dom";

const WinesTop = () => {
  return (
    <div
      className="wines-top-box lazyload"
      data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/wines/top/wines-top-bg.jpg"
    >
      <div className="wines-top-overlay">
        <div className="wines-top-cnt">
          <div>
            <h2>Pick your poison.</h2>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>

            <Link to="/wines#w0" className="page-transition" id="winesTopBtn">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinesTop;
