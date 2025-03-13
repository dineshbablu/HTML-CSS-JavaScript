const pokemonSelect = document.getElementById("pokemonSelect");
// const ulCreate = document.getElementById("ulCreate");
const pokemonContainer = document.getElementById("pokemonContainer");
async function fetchPokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    console.log(data);
    const pokemonList = data.results;
    console.log(pokemonList);
    pokemonList.forEach((pokemon) => {
        console.log("pokemon");
        const optionCreate = document.createElement("option");
        optionCreate.innerText = pokemon.name;
        pokemonSelect.appendChild(optionCreate);
    });
    pokemonSelect.addEventListener("change", (e)=>{
        console.log(e.target.value);
        const targetValue = e.target.value;
        for(let i=0; i<pokemonList.length; i++){
            console.log(pokemonList[i]);          
            if(targetValue === pokemonList[i].name){
                console.log(pokemonList[i].url);
                async function pokemonUrl() {
                    let pokemonAbilities;
                    const cache = JSON.parse(localStorage.getItem("data")) || {};
                    if(cache[e.target.value]) {
                        pokemonAbilities = cache[e.target.value];
                    }
                    else{
                        const response = await fetch(pokemonList[i].url);
                        const data = await response.json();
                        console.log(data);
                        pokemonAbilities = data.abilities;
                        console.log(pokemonAbilities);
                        cache[e.target.value] = pokemonAbilities;
                        localStorage.setItem('data', JSON.stringify(cache));
                    }
                    const existingUl = document.querySelector("ul");
                    if (existingUl) {
                        existingUl.remove();
                    }
                    const ulCreate = document.createElement("ul");
                    pokemonAbilities.forEach((ability) => {
                        console.log("bablu");
                        const liCreate = document.createElement("li");
                        liCreate.innerText = ability.ability.name;
                        console.log(liCreate);
                        ulCreate.appendChild(liCreate);
                    });
                    pokemonContainer.appendChild(ulCreate);
                }
                pokemonUrl();
                // saveData();
                break;
            }
        }
    });

}
function saveData() {
}
fetchPokemonList();