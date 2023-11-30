import scroolToSection from "../../../utils/scrollToSection";
import ArrowDownIcon from "../../../assets/media/icons/arr-down.svg?react";
import { GetInTouchLink, GeyInTouchTxt } from "./GetInTouch.styled";

const GetInTouch = () => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };
  return (
    <GetInTouchLink href="/" onClick={(evt) => handleClick("contact-us", evt)}>
      <GeyInTouchTxt>Get in touch</GeyInTouchTxt>
      <ArrowDownIcon />
    </GetInTouchLink>
  );
};

export default GetInTouch;
