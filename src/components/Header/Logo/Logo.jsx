import IconLogo from "../../../assets/media/icons/logo.svg?react";
import { WrapLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <WrapLogo href="/">
      <IconLogo />
    </WrapLogo>
  );
};

export default Logo;
