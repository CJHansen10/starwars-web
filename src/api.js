const getStarWars = async (StarWars) => {
    const people = encodeURIComponent(StarWars.toLowerCase());
    const url = `https://swapi.dev/api/films${people}/`;
    console.log(url);

    const response = await fetch(url);
    const json = await response.json();
    return json;
}
    export {getStarWars};
