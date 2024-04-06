// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "httpps://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2> <img src = "${results.sprites.front_default}" alt= "Image of ${results.name}">`;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);





let get = document.querySelector('output');
let gethtml = document.querySelector('outputList');

async function doStuffList(data){
    console.log(data);
    const pokeListElement = document.querySelector("outputList");

    const pokeList = data.results;
    pokeList.forEach(pokemon => {
        const html = `<li>${pokemon.name}</li>`;
        pokeListElement.innerHTML +=html;
        
    });
}

async function getPokemonList(url){

    const responda = await fetch(urlList);

    if (responda.ok){
        const data = await responda.json();
        doStuffList(data)
    }
}
