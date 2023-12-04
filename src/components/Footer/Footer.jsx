import scroolToSection from "../../utils/scrollToSection";
import Container from "../Container/Container";
import Logo from "../Header/Logo/Logo";
import ArrowRightIcon from "../../assets/media/icons/arrow-right.svg?react";
import FacebookIcon from "../../assets/media/icons/facebook.svg?react";
import InstagramIcon from "../../assets/media/icons/instagram.svg?react";
import {
  FootContainer,
  FootLinkIcon,
  FootHead,
  SocialIcons,
  SocialLink,
  AddressWrap,
  Copyright,
} from "./Footer.styled";

const Footer = () => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };
  return (
    <footer>
      <Container>
        <FootContainer>
          <FootHead>
            <Logo />
            <FootLinkIcon href="/" onClick={(evt) => handleClick("main", evt)}>
              <ArrowRightIcon />
            </FootLinkIcon>
          </FootHead>
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
          <AddressWrap>
            <a
              href="https://maps.app.goo.gl/msprbJhQzirMxe1q8"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
            </a>
            <a href="mailto: office@ecosolution.com">
              <span>office@ecosolution.com</span>
            </a>
            <span>ecosolution © 2023</span>
          </AddressWrap>
        </FootContainer>
      </Container>
    </footer>
  );
};

export default Footer;
