import { Link } from "react-router-dom";

const ContactFormSide = () => {
  return (
    <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 order-lg-first order-md-first order-sm-first order-first contact-main-side">
      <div className="contact-main-side-cnt">
        <div id="contactFormSideCnt">
          <div className="contact-form-side-top">
            <h2>Reaching out to us.</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed
              odit.
            </p>
          </div>

          <form id="contactForm">
            <div className="contact-form-set">
              <div className="contact-form-group">
                <input
                  type="text"
                  className="contact-form-input page-transition"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="contact-form-group">
                <input
                  type="text"
                  className="contact-form-input page-transition"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set">
              <div className="contact-form-group">
                <input
                  type="email"
                  className="contact-form-input page-transition"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="contact-form-group">
                <input
                  type="tel"
                  className="contact-form-input page-transition"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set cf-bottom-set">
              <div className="contact-form-group">
                <textarea placeholder="Your Message." required></textarea>
              </div>

              <div className="contact-form-group cf-btns">
                <button type="#" className="contact-form-btn page-transition">
                  Send
                </button>
                <button
                  type="reset"
                  className="contact-form-btn page-transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSide;
