/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName = "Mafuwe Manuel";
const currentYear = "2024";
let profilePicture='images/mfw.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");
/// the # in the selector string to indicate the id attribute value. 🪲This syntax detail is often missed.

const imageElement = document.getElementById("profilePicture")

/* Step 4 - Adding Content */

    ///Assign the nameElement's innerHTML property the fullName variable value
nameElement.innerHTML=`<strong>${fullName}</strong>`;

Element.textContent = "currentYear";

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profileImageOf [fullName])

/* Step 5 - Array */
const favoriteFoods = ["Arroz","Batata-frita","Salada","Torradas","Massa"]

document.getElementById(foodElement).innerHTML = {favoriteFoods}





foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.slice(0,1)



