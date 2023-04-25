export async function getPokemonList() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  const pokemonList = await Promise.all(data.results.map(async (pokemon) => {
    const pokemonDetailResponse = await fetch(pokemon.url);
    const pokemonDetailData = await pokemonDetailResponse.json();

    const imageUrl = pokemonDetailData.sprites.front_default;
    return { name: pokemon.name, imageUrl };
  }));

  return pokemonList;
}


/* 포켓몬 상세 정보 조회 */
export async function getPokemonDetail(pokemonNameOrId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
  const response = await fetch(url);
  const data = await response.json();

  const pokemonInfo = {
    name: data.name,
    height: data.height,
    weight: data.weight,
    imageUrl: data.sprites.front_default // 이미지 URL 추가
  };

  return pokemonInfo;
}

