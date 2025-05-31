import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios(BASE_URL);

  /** prompt for a name and fetch that Pokémon */
  const handleAdd = async () => {
    const name = prompt("Enter a Pokémon name:");
    if (name) await addPokemon(name.toLowerCase().trim());
  };

  return (
    <div className="PokeDex">
      <h3>Find a Pokémon!</h3>
      <button onClick={handleAdd}>Add Pokémon</button>

      <div className="PokeDex-card-area">
        {pokemon.map(p => (
          <PokemonCard
            key={p.id}
            name={p.name}
            front={p.sprites.front_default}
            back={p.sprites.back_default}
            stats={p.stats
              .filter(s => s && s.stat && s.stat.name)       // toss out junk / undefined
              .map(({ stat, base_stat }) => ({
              name:  stat.name,
              value: base_stat
            }))}
            
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;