import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ image }) {
  const [isFlipped, flipCard] = useFlip();

  const imgSrc = isFlipped ? backOfCard : image;
  console.log("isFlipped:", isFlipped, "imgSrc:", imgSrc);


  return (
    <img
      className="PlayingCard Card"
      src={imgSrc}
      
      alt="playing card"
      onClick={flipCard}
      style={{ cursor: "pointer" }}
    />
  );
}

export default PlayingCard;
