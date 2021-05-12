const pokemonContainer = document.getElementById('pokedex');

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	displayPokemonCard(pokemon);
};


//get all pokemons from 1 to 150
const fetchPokemons = async () => {
	for (let i = 1; i <151; i++) {
		await getPokemon(i);
	}
};

// this function displays the pokemon card
function displayPokemonCard(pokemon) {
	const pokemonElement = document.createElement('div');
	pokemonElement.classList.add('pokemon');
	console.log(pokemon)
	let type = pokemon.types[0].type.name;
	const name = pokemon.name[0];
	
	const innerHTML = `
		         <li class="card">
		        <img class="card-image" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" "/>
		        <h2 class="card_title">${pokemon.id}. ${pokemon.name}</h2>
		        <p class="card_info">Type: ${type}</p>
		         </li>`;

	pokemonElement.innerHTML = innerHTML;

	pokemonContainer.appendChild(pokemonElement);
 }

fetchPokemons();