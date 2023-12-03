import Carousel from "nuka-carousel";
import { useMediaQuery } from "react-responsive";
import { CasesData } from "../../assets/data/CasesData";
import CasesItem from "../../components/CasesItem/CasesItem";
import ArrowIcon from "../../assets/media/icons/arrow-right-case.svg?react";
import {
  CarouselWrap,
  CasesList,
  CasesTitle,
  NextSlideBtn,
  PrevSlideBtn,
  SlideCounter,
} from "./Cases.styled";

const Cases = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <section id="cases">
      <CarouselWrap>
        <CasesTitle>Successful cases of our&nbsp;company</CasesTitle>
        <CasesList>
          <Carousel
            wrapAround="true"
            slidesToShow={isTablet ? "2" : "1"}
            cellSpacing={isDesktop ? "48" : isTablet ? "24" : "12"}
            renderBottomCenterControls={({ currentSlide, slideCount }) => {
              let current = currentSlide + 1;

              if (isTablet) {
                if (currentSlide === slideCount - 1) {
                  current = 1;
                } else {
                  current = currentSlide + 2;
                }
              }
              return (
                <SlideCounter>
                  {current.toString().padStart(2, "0")}
                  <span> /{slideCount.toString().padStart(2, "0")}</span>
                </SlideCounter>
              );
            }}
            renderCenterLeftControls={({ previousSlide }) => (
              <PrevSlideBtn onClick={() => previousSlide()}>
                <ArrowIcon />
              </PrevSlideBtn>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <NextSlideBtn onClick={() => nextSlide()}>
                <ArrowIcon />
              </NextSlideBtn>
            )}
          >
            {CasesData.map((c) => (
              <li key={c.description}>
                <CasesItem info={c} />
              </li>
            ))}
          </Carousel>
        </CasesList>
      </CarouselWrap>
    </section>
  );
};

export default Cases;
