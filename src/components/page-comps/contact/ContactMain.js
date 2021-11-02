import ContactFormSide from "./contact-sides/ContactFormSide";
import ContactOtherSide from "./contact-sides/ContactOtherSide";

const ContactMain = () => {
  return (
    <div id="contactMainHolder">
      <div className="container-fluid contact-main-box page-transition">
        <div className="row contact-main-row page-transition">
          <ContactFormSide />

          <ContactOtherSide />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
