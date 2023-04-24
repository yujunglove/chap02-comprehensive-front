/* 포켓몬 조회 */
export async function getPokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  

// /* 영화 상세 정보 조회 */
// export async function getMovieDetail(movieCd) {

//     const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${movieCd}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     return data.movieInfoResult.movieInfo;
// }
