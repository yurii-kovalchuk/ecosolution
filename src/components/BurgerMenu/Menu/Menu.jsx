import { MenuContainer } from "./Menu.styled";
import PropTypes from "prop-types";

import menuItems from "../../../assets/data/NavigationData.json";

const Menu = ({ onClose }) => {
  const scroolToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const marginTop = 112;
      const scrollToY =
        section.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const handleClick = (id, evt) => {
    evt.preventDefault();
    onClose();
    scroolToSection(id);
  };

  return (
    <MenuContainer>
      <nav>
        <ul>
          {menuItems.map(({ id, title }) => (
            <li key={id} onClick={(evt) => handleClick(id, evt)}>
              <a href="/">{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </MenuContainer>
  );
};

Menu.propTypes = {
  onClose: PropTypes.func,
};

export default Menu;
