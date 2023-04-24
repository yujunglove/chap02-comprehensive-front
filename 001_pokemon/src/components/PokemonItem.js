import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonList } from "../api/PokemonAPI";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList().then(data => setPokemonList(data));
  }, []);

  return (
    <div className="content-row">
      {pokemonList.map(pokemon => (
        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <div className="item">
            <h3>{pokemon.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PokemonList;
