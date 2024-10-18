import React from "react";
import PropTypes from "prop-types";
import defaultAvatarImage from "../images/avatar.png";
import "../../styles/sass/Components.scss";

const Avatar = ({ src, alt, size }) => {
  return (
    <img
      src={src || defaultAvatarImage}
      alt={alt || "User avatar"}
      className={`avatar avatar-${size}`}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Avatar.defaultProps = {
  size: "medium",
};

export default Avatar;
