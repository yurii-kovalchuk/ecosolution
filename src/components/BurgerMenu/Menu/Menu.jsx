import PropTypes from "prop-types";
import menuItems from "../../../assets/data/NavigationData.json";
import CloseIcon from "../../../assets/media/icons/close.svg?react";
import ArrowCornerIcon from "../../../assets/media/icons/arrow-corner.svg?react";
import Facebook from "../../../assets/media/icons/facebook.svg?react";
import Instagram from "../../../assets/media/icons/instagram.svg?react";
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

const Menu = ({ onClose, setActive, active }) => {
  const handleClick = (id, evt) => {
    evt.preventDefault();
    onClose();
    scroolToSection(id);
    setActive(id);
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
                $isActive={active === id}
              >
                <NavTxt>{title}</NavTxt>
                <ArrowCornerIcon />
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
  active: PropTypes.string,
  setActive: PropTypes.func,
};

export default Menu;
