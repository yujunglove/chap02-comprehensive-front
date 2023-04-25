import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetail } from '../api/PokemonAPI';
import { Link } from 'react-router-dom';


function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonDetail(id);
        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  if (!pokemon) {
    return <div>귀여운 포켓몬을 가지러 가는 중...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* 다른 정보도 출력하려면 여기에 추가하면 됩니다. */}
      <Link to="/pokemon">다시 포켓몬 목록으로</Link>
    </div>
  );
  
  
}

export default PokemonDetail;
