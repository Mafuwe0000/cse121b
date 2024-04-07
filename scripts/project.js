


const addcountry = document.getElementById('add-country');
const removecountry = document.getElementById('remove-country');
const refresh = document.getElementById('refresh-country');

// Calling the function 
getCountry();
getCountry();
getCountry();
getCountry();




let data =[];

// fetch random book from api
async function getCountry(){
    const url = "https://restcountries.com/v3.1/all";


    const response = await fetch(url);
    const dados = await response.json();
    //console.log(dados);
    
    //Retrieving data from JSON
    function randomCountry(dados) {
        return dados[Math.floor(Math.random() * dados.length)];
    }
    //console.log(randomCountry(dados));
    //console.log(paises); 
    let resultado = randomCountry(dados)  ;


    const country = {
        countryName :`${'Continent:   '}${resultado.continents} \n ${"Country:  "} ${resultado.name.common}  ${'Capital:  '}  ${resultado.capital[0]} ${"TIME:  "} ${resultado.timezones
    [0]         } `   }

     console.log(country);

    addData(country);

    } 
//add new object to data array
function addData (obj){
    data.push(obj);

    updateDOM()
}
//
//update DOM
function updateDOM(providedData= data){
    //clear main div
    main.innerHTML = `<h2> <strong> </strong> </h2>`;

    providedData.forEach(item =>{
        const element = document.createElement('div');
        element.classList.add('country');
        element.innerHTML= `<strong>${item.countryName}</strong>`;
        main.appendChild(element);
    })
}


function reloadLocation(){
    location.reload();
}

//remove country
function removeCountry(obj){
    data.pop(obj)

    updateDOM()
}

// event Listener

addcountry.addEventListener('click', getCountry);
refresh.addEventListener("click", reloadLocation);

removecountry.addEventListener('click', removeCountry);
    

    

