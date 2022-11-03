import { getAllPokemons, getOnePokemon, getOnePokemonsCategory } from './controller.js';
import express from 'express';

const pokeRouter = express.Router();

// pokeRouter.route('/').get(getAllPokemons);
// pokeRouter.route('/:id').get(getOnePokemon);
// pokeRouter.route('/:id/:info').get(getOnePokemonsCategory);

pokeRouter.get('/', getAllPokemons);
pokeRouter.get('/:id', getOnePokemon);
pokeRouter.get('/:id/:info', getOnePokemonsCategory);

export default pokeRouter;
