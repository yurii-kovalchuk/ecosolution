import Logo from "./Logo/Logo";

import { HeaderContainer } from "./Header.styled";
import MenuButton from "./MenuButton/MenuButton";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <MenuButton />
      </HeaderContainer>
    </header>
  );
};

export default Header;
