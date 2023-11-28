import Container from "../Container/Container";
import Logo from "./Logo/Logo";

import { Head } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Head>
        <Container>
          <Logo />
          <button type="button">menu</button>
        </Container>
      </Head>
    </>
  );
};

export default Header;
