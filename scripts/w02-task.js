/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName = "Mafuwe Manuel";
const currentYear = '2024';
let profilePicture='images/placeholder.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("year");
let imageElement=document.querySelector("img");

/* Step 4 - Adding Content */

    ///Assign the nameElement's innerHTML property the fullName variable value
nameElement.innerHTML=`<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `'profileImageOf ${fullName}'`)

/* Step 5 - Array */
const favoriteFoods = ["Arroz","Batata-frita","Salada","Torradas","Massa"];

foodElement.innerHTML = `${favoriteFoods}`;

///foodElement = favoriteFoods;

const  oneFavoriteFood = ["ervilhas"];

favoriteFoods.push("ervilhas");


foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`
