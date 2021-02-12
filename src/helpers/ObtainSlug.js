
const obtainInfo = async (juego) => {
    const info = await fetch(`https://api.rawg.io/api/games?page_size=5&search=${juego}`)
    const data = await info.json();
    const {slug, name} = await data.results[0];

    const info2 = await fetch(`https://api.rawg.io/api/games/${slug}`)
    const data2 = await info2.json();
    const genres = data2.genres.map( e => e.name)
    const developers = data2.developers[0].name
    const publisher = data2.publishers[0].name
    const platforms1 = data2.platforms.map(e=> e) // array dentro de array
    const platforms2 = platforms1.map(e => e.platform.name) //continuación del array
    const {description_raw, background_image} = await data2;
    return {name, description_raw, background_image, developers, publisher, platforms2, genres}
}


export default obtainInfo;