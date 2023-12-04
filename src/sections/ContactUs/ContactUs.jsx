import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <Container>
        <h2>Contact Us</h2>
        <div>
          <div>
            <span>Phone:</span>
            <a>
              <span>38 (098) 12 34 567</span>
            </a>
            <a>
              <span>38 (093) 12 34 567</span>
            </a>
          </div>
          <div>
            <span>E-mail:</span>
            <a>
              <span>office@ecosolution.com</span>
            </a>
          </div>
          <div>
            <span>Address:</span>
            <a>
              <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
            </a>
          </div>
          <div>
            <span>Social Networks:</span>
            <div>icons</div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
