import { Link } from "react-router-dom";

const AboutSectTwo = () => {
  return (
    <div id="aboutSectTwo" className="about-sect">
      <div className="container-fluid about-sect-box page-transition">
        <div className="row about-sect-row page-transition">
          <div
            className="col-lg-7 col-md-6 col-sm-8 col-xs-12 about-sect-side page-transition order-lg-last order-md-last order-sm-last order-first a-fade"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="400"
          >
            <div className="about-sect-side-cnt">
              <div className="about-sect-side-txt">
                <h2>Success.</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint .
                </p>

                <Link to="/wines#w0" className="page-transition">
                  View Wines
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-4 col-xs-12 about-sect-side page-transition order-lg-first order-md-first order-sm-first order-last a-fade"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="400"
          >
            <div className="about-sect-bgs" id="aboutSectTwoBgs">
              <div
                className="about-sect-bg lg-bg lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/about/sects/sect-2/sect-2-bg-1.jpg"
              ></div>
              <div
                className="about-sect-bg sm-bg lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/about/sects/sect-2/sect-2-bg-2.jpg"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectTwo;
