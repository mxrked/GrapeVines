import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function IndexTop() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  return (
    <div id="indexTopSlick">
      <Slider {...settings}>
        <div className="index-top-slide">
          <div className="index-top-slide-bg">
            <video
              data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/slides/slide-1.mp4"
              className="lazyload"
              type="video/mp4"
              id="videoSlide1"
              data-poster="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/posters/index/poster-1.png"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="index-top-slide-cnt">
            <div className="index-top-slide-cnt-inner">
              <h2>
                we promise to have <br /> something to your taste.
              </h2>

              <p>different flavors for different people.</p>

              <div className="index-top-slide-link-holder">
                <Link
                  to="/wines#w0"
                  className="index-top-slide-link page-transition"
                  id="iTopL1"
                >
                  view wines
                </Link>

                <div className="link-dots" id="iTopLinkDots1">
                  <span className="link-dot page-transition"></span>
                  <span className="link-dot page-transition"></span>
                  <span className="link-dot page-transition"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="index-top-slide" id="indexTopSlide2">
          <div className="index-top-slide-bg" id="indexTopSlideBg2">
            <video
              data-src="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/slides/slide-2.mp4"
              className="lazyload"
              type="video/mp4"
              id="videoSlide2"
              autoPlay
              data-poster="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/posters/index/poster-2.png"
              loop
              muted
            />
          </div>

          <div className="index-top-slide-cnt">
            <div className="index-top-slide-cnt-inner">
              <h2>
                understanding our
                <br /> process of making wines.
              </h2>

              <p>get to know the team behind grapevines.</p>

              <div className="index-top-slide-link-holder">
                <Link
                  to="/team"
                  className="index-top-slide-link page-transition"
                  id="iTopL2"
                >
                  view team
                </Link>

                <div className="link-dots" id="iTopLinkDots2">
                  <span className="link-dot page-transition"></span>
                  <span className="link-dot page-transition"></span>
                  <span className="link-dot page-transition"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
