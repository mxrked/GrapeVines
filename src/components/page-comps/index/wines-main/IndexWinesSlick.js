import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class IndexWinesSlick extends Component {
  componentDidMount() {}

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      arrows: true,
      // autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1995,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <div
        id="indexWinesSlickHolder"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <Slider {...settings}>
          <div className="index-wines-slick-slide">
            <div className="index-wines-slick-slide-inner">
              <div
                className="fake-img red-fake lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/wines/red/red-1.jpg"
              />

              <div className="index-wines-slick-slide-cnt">
                <div className="index-wines-slick-slide-cnt-inner">
                  <div>
                    <h3>Red #1</h3>

                    <p>
                      Red <br /> Wine
                    </p>
                  </div>

                  <div>
                    <Link to="/wines#w1">Get Now</Link>

                    <span className="index-wines-slick-slide-price">
                      $35.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="index-wines-slick-slide">
            <div className="index-wines-slick-slide-inner">
              <div
                className="fake-img red-fake lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/wines/rose/rose-1.jpg"
              />

              <div className="index-wines-slick-slide-cnt">
                <div className="index-wines-slick-slide-cnt-inner">
                  <div>
                    <h3>Rose #1</h3>

                    <p>
                      Rose <br /> Wine
                    </p>
                  </div>

                  <div>
                    <Link to="/wines#w2">Get Now</Link>

                    <span className="index-wines-slick-slide-price">
                      $35.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="index-wines-slick-slide">
            <div className="index-wines-slick-slide-inner">
              <div
                className="fake-img rose-fake lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/wines/sparkling/sparkling-1.jpg"
              />

              <div className="index-wines-slick-slide-cnt">
                <div className="index-wines-slick-slide-cnt-inner">
                  <div>
                    <h3>Sparkling #1</h3>

                    <p>
                      Sparkling <br /> Wine
                    </p>
                  </div>

                  <div>
                    <Link to="/wines#w3">Get Now</Link>

                    <span className="index-wines-slick-slide-price">
                      $35.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="index-wines-slick-slide">
            <div className="index-wines-slick-slide-inner">
              <div
                className="fake-img rose-fake lazyload"
                data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/wines/white/white-1.jpg"
              />

              <div className="index-wines-slick-slide-cnt">
                <div className="index-wines-slick-slide-cnt-inner">
                  <div>
                    <h3>White #1</h3>

                    <p>
                      White <br /> Wine
                    </p>
                  </div>

                  <div>
                    <Link to="/wines#w4">Get Now</Link>

                    <span className="index-wines-slick-slide-price">
                      $35.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default IndexWinesSlick;
