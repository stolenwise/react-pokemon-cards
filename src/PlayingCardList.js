// src/PlayingCardList.js
import React from "react";
import PlayingCard from "./PlayingCard";
import { useAxios } from "./hooks";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

function PlayingCardList() {
  // pull array + helper straight from the hook
  const [cards, addCard] = useAxios(
    BASE_URL,
    data => data.cards[0]
  );


  return (
    <div className="PlayingCardList">
      <h3>Pick a card (or a few)!</h3>

      {/* add-card button */}
      <button onClick={() => addCard()}>Add a playing card!</button>

      {/* render everything we’ve drawn */}
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard
            key={card.code}        // e.g. "5S"
            image={card.image}      // front-of-card URL
          />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
