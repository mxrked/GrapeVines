const TeamMateTwo = () => {
  return (
    <div className="team-mate-holder" id="teamMateTwoHolder">
      <div className="container-fluid team-mate-box page-transition">
        <div className="row team-mate-row page-transition">
          <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 team-mate-side order-lg-last order-md-last order-sm-last order-first">
            <div
              className="team-mate-side-cnt a-fade"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="400"
            >
              <h4>Wine Maker</h4>
              <h2>Jane Doe.</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-4 col-xs-12 team-mate-side order-lg-first order-md-first order-sm-first order-last">
            <div
              className="team-mate-side-bgs-holder a-fade"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="400"
            >
              <div className="team-mate-side-colored-bg" id="teamMateCBOne" />
              <div className="team-mate-side-colored-bg" id="teamMateCBTwo" />
              <div
                className="team-mate-side-bg lazyload"
                id="teamMateBGTwo"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/team/team-mates/mate-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMateTwo;
