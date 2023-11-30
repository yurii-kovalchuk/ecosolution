import { useState } from "react";
import MenuModal from "../../BurgerMenu/Modal/Modal";
import Icon from "../../../assets/media/menu.svg?react";
import { MenuButton } from "./MenuButton.styled";

const MenuBtn = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <MenuButton type="button" onClick={() => setIsModal(true)}>
        <Icon />
      </MenuButton>
      {isModal && <MenuModal onClose={() => setIsModal(false)} />}
    </>
  );
};

export default MenuBtn;
