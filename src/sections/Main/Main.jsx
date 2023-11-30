import Container from "../../components/Container/Container";
import scroolToSection from "../../utils/scrollToSection";
import ArrowRightIcon from "../../assets/media/icons/arrow-right.svg?react";
import {
  MainSection,
  MainTitle,
  MainTxt,
  MainWrapper,
  TextWrapper,
  MainLink,
  MainLinkTxt,
  MainLinkIcon,
} from "./Main.styled";

const Main = () => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };
  return (
    <MainSection id="main">
      <Container>
        <MainWrapper>
          <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
          <TextWrapper>
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
          </TextWrapper>
        </MainWrapper>
        <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
        <span>office@ecosolution.com</span>
        <div>background</div>
      </Container>
    </MainSection>
  );
};

export default Main;
