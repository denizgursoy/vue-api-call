export function getCharacter(id) {
    return fetch(`https://swapi.dev/api/people/${id}`).then((response) =>
        response.json()
    );
}
