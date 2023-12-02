import { useState, useEffect } from "react";
import valueFormatter from "../../utils/valueFormatter";
import Container from "../../components/Container/Container";
import {
  ElectricityMeasure,
  ElectricitySection,
  ElectricityTitle,
  ElectricityValue,
  ValueWrap,
} from "./Electricity.styled";

const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricitySection>
      <Container>
        <ElectricityTitle>
          Electricity we produced for all time
        </ElectricityTitle>
        <ValueWrap>
          <ElectricityValue>{valueFormatter(count)}</ElectricityValue>
          <ElectricityMeasure>kWh</ElectricityMeasure>
        </ValueWrap>
      </Container>
    </ElectricitySection>
  );
};

export default Electricity;
