
const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=20`;

export async function getPokemons() {
  const getData = await fetch(baseUrl, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return console.log(error);
    });
  return getData;
}
