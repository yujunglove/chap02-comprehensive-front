import React, { useEffect, useState } from "react";
import { getPokemonList } from "../api/PokemonAPI";
import PokemonItem from "../components/PokemonItem";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList().then(topTen => {
      setPokemonList(topTen);
    });
  }, []);

  return (
    <div className="content-row">
      {pokemonList.map(pokemon => (
        <PokemonItem
          key={pokemon.name}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </div>
  );
}

export default PokemonList;
