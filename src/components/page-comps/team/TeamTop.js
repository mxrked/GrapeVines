import { Link } from "react-router-dom";

const TeamTop = () => {
  return (
    <div id="teamTopHolder">
      <div
        className="container-fluid team-top-box page-transition lazyload"
        data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/team-top-bg.jpg"
      >
        <div className="row team-top-row page-transition">
          <div className="col-lg-12 team-top-side page-transition">
            <div className="team-top-side-cnt">
              <h2>Meet the team.</h2>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>

              <Link to="/wines#w0" className="page-transition">
                View Wines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTop;
