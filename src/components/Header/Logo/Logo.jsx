import IconLogo from "../../../assets/media/logo.svg?react";
import { WrapLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <WrapLogo href="/">
      <IconLogo />
    </WrapLogo>
  );
};

export default Logo;
