import React from "react";
import propTypes from "prop-types";

/**
 */
export default function Taam({ taam }) {
  return <div className="taam" onClick={() => handleClick()} dir="rtl" >
    {
      taam.display ?
      <p className="face">{taam.display}</p> :
      <img src={`../taamim/${taam.name}.png`} alt={taam.name} />
    }
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
