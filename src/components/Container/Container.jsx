import PropTypes from "prop-types";
import { ContainBox } from "./Container.styled";

const Container = ({ children, className }) => {
  return <ContainBox className={className}>{children}</ContainBox>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
