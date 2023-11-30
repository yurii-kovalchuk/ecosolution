import ArrowDownIcon from "../../../assets/media/arr-down.svg?react";
import scroolToSection from "../../../utils/scrollToSection";
import { GetInTouchBtn, GeyInTouchTxt } from "./GetInTouch.styled";

const GetInTouch = () => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };
  return (
    <GetInTouchBtn href="/" onClick={(evt) => handleClick("contact-us", evt)}>
      <GeyInTouchTxt>Get in touch</GeyInTouchTxt>
      <ArrowDownIcon />
    </GetInTouchBtn>
  );
};

export default GetInTouch;
