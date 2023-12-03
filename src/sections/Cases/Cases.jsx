import { CasesData } from "../../assets/data/CasesData";
import Container from "../../components/Container/Container";
import ArrowIcon from "../../assets/media/icons/arrow-corner.svg?react";
import {
  CaseBtn,
  CaseDescriptWrap,
  CaseInfo,
  CaseTitle,
  CaseTitleWrap,
  CasesItem,
  CasesTitle,
} from "./Cases.styled";

const Cases = () => {
  const { img, description, title, data } = CasesData[0];

  return (
    <section id="cases">
      <Container>
        <CasesTitle>Successful cases of our&nbsp;company</CasesTitle>
        <CasesItem>
          <img src={img[0]} alt={description} />
          <CaseInfo>
            <CaseTitleWrap>
              <CaseTitle>{title}</CaseTitle>
              <CaseBtn>
                <ArrowIcon />
              </CaseBtn>
            </CaseTitleWrap>
            <CaseDescriptWrap>
              <span>{description}</span>
              <span>{data}</span>
            </CaseDescriptWrap>
          </CaseInfo>
        </CasesItem>
      </Container>
    </section>
  );
};

export default Cases;
