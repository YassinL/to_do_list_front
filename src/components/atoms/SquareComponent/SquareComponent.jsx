import React from "react";
import PropTypes from "prop-types";
import "./SquareComponent.scss";

export default function SquareComponent({ children }) {
  return <div className="squareComponent">{children}</div>;
}

SquareComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
