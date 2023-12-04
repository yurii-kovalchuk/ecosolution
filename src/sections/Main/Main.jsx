import Container from "../../components/Container/Container";
import scroolToSection from "../../utils/scrollToSection";
import ArrowRightIcon from "../../assets/media/icons/arrow-right.svg?react";
import {
  MainSection,
  MainTitle,
  MainTxt,
  MainWrap,
  TextWrap,
  MainLink,
  MainLinkTxt,
  MainLinkIcon,
  AddressWrap,
  Contacts,
  Copyright,
  MainBackground,
} from "./Main.styled";

const Main = () => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };
  return (
    <MainSection id="main">
      <Container>
        <MainWrap>
          <MainTitle>RENEWABLE ENERGY For any&nbsp;task</MainTitle>
          <TextWrap>
            <MainTxt>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </MainTxt>
            <MainLink href="/" onClick={(evt) => handleClick("cases", evt)}>
              <MainLinkTxt>Learn more</MainLinkTxt>
              <MainLinkIcon>
                <ArrowRightIcon />
              </MainLinkIcon>
            </MainLink>
          </TextWrap>
        </MainWrap>
        <AddressWrap>
          <a
            href="https://maps.app.goo.gl/msprbJhQzirMxe1q8"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </a>
          <Contacts>
            <a href="mailto: office@ecosolution.com">
              <span>office@ecosolution.com</span>
            </a>
            <Copyright>ecosolution © 2023</Copyright>
          </Contacts>
        </AddressWrap>
        <MainBackground></MainBackground>
      </Container>
    </MainSection>
  );
};

export default Main;
