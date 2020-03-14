const searchStarWarsCharacter = async (
    text,
    abortSignal
) => {
    const result = await fetch(
        `https://swapi.co/api/people/?search=${encodeURIComponent(text)}`,
        {
            signal: abortSignal,
            cache: "force-cache"
        },
    );
    if (result.status !== 200) {
        throw new Error('bad status = ' + result.status);
    }
    const json = await result.json();
    return json;
};

const getAllStarWarsCharacters = async (abortSignal) => {

    let people = [];
    // first page
    const allResults = await fetch(
        `https://swapi.co/api/people/`,
        {
            signal: abortSignal,
            cache: "force-cache"
        });

    const json = await allResults.json();

    const count = json.count;

    const numberOfPagesLeft = Math.ceil((count - 1) / 10);
    let promises = [json];
    // start at 2 as you already queried the first page
    for (let i = 2; i <= numberOfPagesLeft; i++) {
        const result = await fetch(`https://swapi.co/api/people?page=${i}`);
        if (result.status !== 200) {
            throw new Error('bad status = ' + result.status);
        }
        const json = await result.json();
        promises.push(json);
    }

    const combined = await Promise.all(promises).then((response) => {
        people = response.reduce((acc, data) => {
            const currResult = data.results;
            return [...acc, ...currResult];
        }, people);
        return people;
    });

    return combined;
};

const getStarWarsStarShip = async (
    starShipUrl,
    abortSignal
) => {
    const result = await fetch(
        starShipUrl,
        {
            signal: abortSignal,
        }
    );
    if (result.status !== 200) {
        throw new Error('bad status = ' + result.status);
    }
    const json = await result.json();
    return json;
};

const StarWarsRequests = {
    searchStarWarsCharacter,
    getAllStarWarsCharacters,
    getStarWarsStarShip,
};
export { StarWarsRequests };
export default searchStarWarsCharacter;
