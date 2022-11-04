import database from '../database.json' assert { type: "json" };

export function getAllPokemons(req, res) {
    res.json(database)
}

export function getOnePokemon(req, res) {
    const { id } = req.params;
    res.json(database.filter(itemInObject => id == itemInObject.id))
}

export function getOnePokemonsCategory(req, res) {
    console.log(req.params.id, req.params.info)
    const poke = database[req.params.id - 1]
    const requestedSubfield = poke[req.params.info]
    res.json({ requestedSubfield })
}
