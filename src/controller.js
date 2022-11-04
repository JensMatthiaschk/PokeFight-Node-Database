import database from '../database.json' assert { type: "json" };

export function getAllPokemons(req, res) {
    res.json(database)
}

export function getOnePokemon(req, res) {
    const { id } = req.params;
    res.json(database.filter(itemInObject => id == itemInObject.id))
}

export function getOnePokemonsCategory(req, res) {
    database.map(entry => {
        if (req.params.info == 'name') { res.send(entry.name) }
        else if (req.params.info == 'type') { res.send(entry.type) }
        else if (req.params.info == 'base') { res.send(entry.base) }
        else { res.send(`pokemon doesn't have a key called ${req.params.info}`) }
    })
}
