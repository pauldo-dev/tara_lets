import React from "react";
import PropTypes from "prop-types";
import "../../styles/sass/Components.scss";

const Card = ({ title, children, className, image }) => {
  return (
    <div className={`card ${className}`}>
      {image && <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>}
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  title: "",
  className: "",
  image: "",
};

export default Card;
