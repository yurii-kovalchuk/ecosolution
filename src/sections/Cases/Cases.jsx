import { CasesData } from "../../assets/data/CasesData";
import Container from "../../components/Container/Container";
import CasesItem from "../../components/CasesItem/CasesItem";
import { CasesTitle } from "./Cases.styled";

const Cases = () => {
  return (
    <section id="cases">
      <Container>
        <CasesTitle>Successful cases of our&nbsp;company</CasesTitle>

        <CasesItem info={CasesData[3]} />
      </Container>
    </section>
  );
};

export default Cases;
