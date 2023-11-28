import { useState, useEffect } from "react";
import MenuButton from "./MenuButton/MenuButton";
import Logo from "./Logo/Logo";
import { HeaderSection, HeaderContainer, Stopgap } from "./Header.styled";

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
      <HeaderSection scrolled={scrolled}>
        <HeaderContainer>
          <Logo />
          <MenuButton />
        </HeaderContainer>
      </HeaderSection>
      <Stopgap />
    </>
  );
};

export default Header;
