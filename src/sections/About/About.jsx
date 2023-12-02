import Container from "../../components/Container/Container";
import CircleIcon from "../../assets/media/icons/maximize-circle.svg?react";
import GlobalIcon from "../../assets/media/icons/global-edit.svg?react";
import CpuIcon from "../../assets/media/icons/cpu-charge.svg?react";
import RankingIcon from "../../assets/media/icons/ranking.svg?react";
import {
  AboutSection,
  GridContainer,
  GridItem,
  GridImgItem,
  AboutTitle,
  AboutWrap,
  AboutTxt,
  AboutImg,
  ItemTitle,
  ItemTxt,
} from "./About.styled";

import about1T1x from "../../assets/media/images/about/img1-t@1x.jpg";
import about1T2x from "../../assets/media/images/about/img1-t@2x.jpg";
import about2T1x from "../../assets/media/images/about/img2-t@1x.jpg";
import about2T2x from "../../assets/media/images/about/img2-t@2x.jpg";
import about1D1x from "../../assets/media/images/about/img1-d@1x.jpg";
import about1D2x from "../../assets/media/images/about/img1-d@2x.jpg";
import about2D1x from "../../assets/media/images/about/img2-d@1x.jpg";
import about2D2x from "../../assets/media/images/about/img2-d@2x.jpg";

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutWrap>
          <AboutTitle>Main values of our company</AboutTitle>
          <AboutTxt>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&rsquo;s energy needs.
          </AboutTxt>
        </AboutWrap>
        <GridContainer>
          <GridItem>
            <ItemTitle>
              <CircleIcon />
              <span>Openness</span>
            </ItemTitle>
            <ItemTxt>to the world, people, new ideas and projects</ItemTxt>
          </GridItem>
          <GridItem>
            <ItemTitle>
              <GlobalIcon />
              <span>Responsibility</span>
            </ItemTitle>
            <ItemTxt>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </ItemTxt>
          </GridItem>
          <GridImgItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${about1D1x} 1x, ${about1D2x} 2x,`}
              />
              <AboutImg
                srcSet={`${about1T1x} 1x, ${about1T2x} 2x,`}
                src={`${about1T1x}`}
                alt="wind farms fields"
              />
            </picture>
          </GridImgItem>
          <GridImgItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${about2D1x} 1x, ${about2D2x} 2x,`}
              />
              <AboutImg
                srcSet={`${about2T1x} 1x, ${about2T2x} 2x,`}
                src={`${about2T1x}`}
                alt="man-worker"
              />
            </picture>
          </GridImgItem>
          <GridItem>
            <ItemTitle>
              <CpuIcon />
              <span>Innovation</span>
            </ItemTitle>
            <ItemTxt>
              we use the latest technology to implement non-standard solutions
            </ItemTxt>
          </GridItem>
          <GridItem>
            <ItemTitle>
              <RankingIcon />
              <span>Quality</span>
            </ItemTitle>
            <ItemTxt>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </ItemTxt>
          </GridItem>
        </GridContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
