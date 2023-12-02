import { useEffect, useState } from "react";
import MenuModal from "../../BurgerMenu/Modal/Modal";
import Icon from "../../../assets/media/icons/menu.svg?react";
import { MenuButton } from "./MenuButton.styled";
import menuItems from "../../../assets/data/NavigationData.json";

const MenuBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const [activeLink, setActiveLink] = useState("main");

  const determineActiveSection = () => {
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(menuItems[i].id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(menuItems[i].id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", determineActiveSection);
    return () => {
      window.removeEventListener("scroll", determineActiveSection);
    };
  }, []);

  return (
    <>
      <MenuButton type="button" onClick={() => setIsModal(true)}>
        <Icon />
      </MenuButton>
      {isModal && (
        <MenuModal
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          onClose={() => setIsModal(false)}
        />
      )}
    </>
  );
};

export default MenuBtn;
