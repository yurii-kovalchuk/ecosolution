import Carousel from "nuka-carousel";
import { useMediaQuery } from "react-responsive";
import { CasesData } from "../../assets/data/CasesData";
import Container from "../../components/Container/Container";
import CasesItem from "../../components/CasesItem/CasesItem";
import { CarouselWrap, CasesList, CasesTitle } from "./Cases.styled";

const CarouselProps = {
  wrapAround: "true",
  withoutControls: "true",
};

const Cases = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <section id="cases">
      <Container>
        <CasesTitle>Successful cases of our&nbsp;company</CasesTitle>
        <CarouselWrap>
          <CasesList>
            <Carousel
              {...CarouselProps}
              slidesToShow={isTablet ? "2" : "1"}
              cellSpacing={isDesktop ? "48" : isTablet ? "24" : 0}
            >
              {CasesData.map((c) => (
                <li key={c.description}>
                  <CasesItem info={c} />
                </li>
              ))}
            </Carousel>
          </CasesList>
        </CarouselWrap>
      </Container>
    </section>
  );
};

export default Cases;
