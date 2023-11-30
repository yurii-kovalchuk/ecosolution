import { useState } from "react";
import PropTypes from "prop-types";
import menuItems from "../../../assets/data/NavigationData.json";
import CloseIcon from "../../../assets/media/close.svg?react";
import ArrowRight from "../../../assets/media/arrow-right.svg?react";
import Facebook from "../../../assets/media/facebook.svg?react";
import Instagram from "../../../assets/media/instagram.svg?react";
import {
  MenuContainer,
  CloseBtn,
  CloseTxt,
  Navigation,
  SocialMedia,
  NavItem,
  NavLink,
  NavTxt,
  SocialLink,
} from "./Menu.styled";
import scroolToSection from "../../../utils/scrollToSection";

const Menu = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState("main");

  const handleClick = (id, evt) => {
    evt.preventDefault();
    onClose();
    scroolToSection(id);
    setActiveLink(id);
  };

  return (
    <MenuContainer>
      <div>
        <CloseBtn type="button" onClick={onClose}>
          <CloseIcon />
          <CloseTxt>close</CloseTxt>
        </CloseBtn>
      </div>
      <Navigation>
        <ul>
          {menuItems.map(({ id, title }) => (
            <NavItem key={id}>
              <NavLink
                href="/"
                onClick={(evt) => handleClick(id, evt)}
                $isActive={activeLink === id}
              >
                <NavTxt>{title}</NavTxt>
                <ArrowRight />
              </NavLink>
            </NavItem>
          ))}
        </ul>
      </Navigation>
      <SocialMedia>
        <SocialLink
          href="https://www.facebook.com/yurii.kovalchuk.7921"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/chasssit/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </SocialLink>
      </SocialMedia>
    </MenuContainer>
  );
};

Menu.propTypes = {
  onClose: PropTypes.func,
};

export default Menu;
