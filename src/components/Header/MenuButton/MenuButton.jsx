import { useState } from "react";
import MenuModal from "../../BurgerMenu/Modal/Modal";
import Icon from "../../../assets/media/menu.svg?react";
import { Button } from "./MenuButton.styled";

const MenuBtn = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsModal(true)}>
        <Icon />
      </Button>
      {isModal && <MenuModal onClose={() => setIsModal(false)} />}
    </>
  );
};

export default MenuBtn;
