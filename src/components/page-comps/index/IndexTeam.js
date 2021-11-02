import { Link } from "react-router-dom";

const IndexTeam = () => {
  return (
    <div id="indexTeamHolder">
      <div
        className="index-team-top"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
      >
        <h3>Meeting the team.</h3>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <Link to="/team" className="page-transition">
          Learn More
        </Link>
      </div>

      <div
        className="container-fluid index-team-box page-transition"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="900"
      >
        <div className="row index-team-row page-transition">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 index-team-side">
            <div className="index-team-side-inner">
              {/*<div className="i-team-fake-img" />*/}

              {/* 
              <img
                data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/male-1.png"
                className="lazyload"
                alt="Placeholder Headshot"
              />
              */}

              <div
                className="i-team-img lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/team-mates/mate-1.png"
              />

              <div className="i-team-text">
                <h4>John Doe</h4>

                <q>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor!
                </q>

                <Link to="/team" className="page-transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 index-team-side">
            <div className="index-team-side-inner">
              {/*<div className="i-team-fake-img" />*/}

              {/* 
              <img
                data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/female-1.png"
                className="lazyload"
                alt="Placeholder Headshot"
              />
              */}

              <div
                className="i-team-img lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/team-mates/mate-2.png"
              />

              <div className="i-team-text">
                <h4>Jane Doe</h4>

                <q>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor!
                </q>

                <Link to="/team" className="page-transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 index-team-side">
            <div className="index-team-side-inner">
              {/*<div className="i-team-fake-img" />*/}

              {/* 
              <img
                data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/male-2.png"
                className="lazyload"
                alt="Placeholder Headshot"
              />
              */}

              <div
                className="i-team-img lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/team-mates/mate-3.png"
              />

              <div className="i-team-text">
                <h4>John Doe</h4>

                <q>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor!
                </q>

                <Link to="/team" className="page-transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTeam;
