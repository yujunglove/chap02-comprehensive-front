import { useEffect, useState } from "react";
import PokemonItem from "../components/PokemonItem";
import { getPokemonList } from "../api/PokemonAPI";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList().then(data => {
      // 상위 10개의 항목만 포함하도록 배열을 잘라냅니다.
      const topTen = data.slice(0, 10);
      setPokemonList(topTen);
    });
  }, []);

  return (
    <div className="content-row">
      {pokemonList.map(pokemon => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
