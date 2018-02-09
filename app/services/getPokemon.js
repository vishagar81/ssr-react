import axios from 'axios';

const getPokemon = {
    withAbility: (ability) => {
        const baseUrl = 'http://pokeapi.co/api/v2/ability';
        console.log('get data from pokemon api....');
        return axios.get(`${baseUrl}/${ability}`)
    }
}
export default getPokemon;