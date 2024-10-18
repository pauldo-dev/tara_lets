import React from "react";
import "../../sass/Components.scss";
import PropTypes from "prop-types";

const Button = ({ variant, children, onClick, className, ...props }) => {
  const buttonClass = `btn btn-${variant} ${className || ""}`.trim();

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outlineGold",
    "outlineGreen",
  ]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
  className: "",
};

export default Button;
