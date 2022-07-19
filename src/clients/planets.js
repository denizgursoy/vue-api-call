const dummyPlanet = {
    name: "Tatooine"
};

export function getPlanet(id) {
    return Promise.resolve(dummyPlanet);
}
