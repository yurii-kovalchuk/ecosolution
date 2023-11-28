import PropTypes from "prop-types";
import { ContainBox } from "./Container.styled";

const Container = ({ children }) => {
  return <ContainBox>{children}</ContainBox>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
