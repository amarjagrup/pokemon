//Thia script will display all 151 pokemon from the kanto region.

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
	
	/*Thw const innerHtml will contain information about the front of the card and when hovered  
	 * display different information about the pokemon.
	 */
	const innerHTML = `
		        
				 <div class="flip-card">
	<div class="flip-card-inner">
	  <div class="flip-card-front">
	  <li class="card">
	  <img class="card-image" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" "/>
	  <h2 class="card_title">${pokemon.id}. ${pokemon.name}</h2>
	   </li>
	  </div>
	  <div class="flip-card-back">
		<img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png" alt="${name}" "/>
		<p class= "info">Weight: ${pokemon.weight}</p>
		<p class="info">Type: ${type}</p>
	  </div>
	</div>
  </div>
			`;
	pokemonElement.innerHTML = innerHTML;

	pokemonContainer.appendChild(pokemonElement);
 }

fetchPokemons();