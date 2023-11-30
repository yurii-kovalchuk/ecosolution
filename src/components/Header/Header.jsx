import { useState, useEffect } from "react";
import MenuButton from "./MenuButton/MenuButton";
import Logo from "./Logo/Logo";
import { HeaderSection, HeaderContainer, Interactive } from "./Header.styled";
import GetInTouch from "./GetInTouch/GetInTouch";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <HeaderSection $scrolled={scrolled} id="header">
        <HeaderContainer>
          <Logo />
          <Interactive>
            <MenuButton />
            <GetInTouch />
          </Interactive>
        </HeaderContainer>
      </HeaderSection>
    </>
  );
};

export default Header;
