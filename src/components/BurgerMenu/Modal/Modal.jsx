import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Backdrop, ContentContainer } from "./Modal.styled";
import Menu from "../Menu/Menu";

const modalRoot = document.querySelector("#modal-root");

const MenuModal = ({ onClose }) => {
  useEffect(() => {
    const onEscClick = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscClick);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEscClick);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ContentContainer onClick={onBackdropClick}>
        {<Menu onClose={onClose} />}
      </ContentContainer>
    </Backdrop>,
    modalRoot
  );
};

export default MenuModal;

MenuModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
