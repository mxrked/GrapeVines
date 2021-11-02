import { Link } from "react-router-dom";

const IndexContact = () => {
  return (
    <div id="indexContactHolder">
      <div
        className="index-contact-bgs"
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="200"
      >
        <div className="index-contact-bg"></div>
        <div className="index-contact-bg"></div>
      </div>

      <div
        id="indexContact"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <div
          className="index-contact-box lazyload"
          data-bg="http://basicallyeasy.com/Website CDNS/REACTCDNS/GrapeVines/index/contact/index-contact-bg.jpg"
        >
          <div className="index-contact-overlay">
            <div className="index-contact-cnt">
              <div>
                <h3>Want to get in touch?</h3>

                <Link to="/contact" className="page-transition">
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

export default IndexContact;
