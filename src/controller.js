import database from '../database.json' assert { type: "json" };

export function getAllPokemons(req, res) {
    res.json(database)
}

export function getOnePokemon(req, res) {
    const { id } = req.params;
    res.json(database.filter(itemInObject => id == itemInObject.id))
}

export function getOnePokemonsCategory(req, res) {
    const { name, type, base } = req.params;
}