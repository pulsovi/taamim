import React from "react";
import propTypes from "prop-types";

/**
 */
export default function Taam({ taam }) {
  return <div className="taam" onClick={() => handleClick()} dir="rtl" >
    <p className="face">{taam.display}</p>
    <audio id={`${taam.name}_audio`}src={`../taamim/${taam.name}.ogg`} />
  </div>;

  /**
   */
  function handleClick() {
    const audio = document.getElementById(`${taam.name}_audio`);
    audio.fastSeek(0);
    audio.play();
  }
}

Taam.propTypes = {
  taam: propTypes.shape({
    display: propTypes.string,
    name: propTypes.string,
  }),
};
