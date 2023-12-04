import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import PhoneIcon from "../../assets/media/icons/call.svg?react";
import MailIcon from "../../assets/media/icons/sms.svg?react";
import MapIcon from "../../assets/media/icons/map.svg?react";
import FacebookIcon from "../../assets/media/icons/facebook.svg?react";
import InstagramIcon from "../../assets/media/icons/instagram.svg?react";
import {
  ContactUsTitle,
  ContactsBadge,
  ContactsWrap,
  ContactsLink,
  PhoneList,
  SocialIcons,
  SocialLink,
  FormWrap,
  ContactUsWrap,
} from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <Container>
        <ContactUsTitle>Contact Us</ContactUsTitle>
        <ContactUsWrap>
          <ContactsWrap>
            <div>
              <ContactsBadge>Phone:</ContactsBadge>
              <PhoneList>
                <li>
                  <ContactsLink href="tel:+380981234567">
                    <PhoneIcon />
                    <span>38 (098) 12 34 567</span>
                  </ContactsLink>
                </li>
                <li>
                  <ContactsLink href="tel:+380931234567">
                    <PhoneIcon />
                    <span>38 (093) 12 34 567</span>
                  </ContactsLink>
                </li>
              </PhoneList>
            </div>
            <div>
              <ContactsBadge>E-mail:</ContactsBadge>
              <ContactsLink href="mailto: office@ecosolution.com">
                <MailIcon />
                <span>office@ecosolution.com</span>
              </ContactsLink>
            </div>
            <div>
              <ContactsBadge>Address:</ContactsBadge>
              <ContactsLink
                href="https://maps.app.goo.gl/msprbJhQzirMxe1q8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MapIcon />
                <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
              </ContactsLink>
            </div>
            <div>
              <ContactsBadge>Social Networks:</ContactsBadge>
              <SocialIcons>
                <li>
                  <SocialLink
                    href="https://www.facebook.com/yurii.kovalchuk.7921"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </SocialLink>
                </li>
                <li>
                  <SocialLink
                    href="https://www.instagram.com/chasssit/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </SocialLink>
                </li>
              </SocialIcons>
            </div>
          </ContactsWrap>
          <FormWrap>
            <ContactForm />
          </FormWrap>
        </ContactUsWrap>
      </Container>
    </section>
  );
};

export default ContactUs;
