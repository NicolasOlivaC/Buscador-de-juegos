

const ObtainSlug2 = async (juego) => {
    const info = await fetch(`https://api.rawg.io/api/games?page_size=5&search=${juego}`);
    const data = await info.json();
    const referencias = await data.results.map(elemento => elemento.name);
    return referencias;
}

export default ObtainSlug2
