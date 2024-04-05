/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('div');
const templeList = new templeList();

/* async displayTemples Function */
const displayTemples = (templesList)=>{

    templeList.forEach(eachTemple => {

        
    });
}
const article = document.createElement('<article>');
const heading3 = document.createElement('h3');

heading3.add('templeName');

let img = document.createElement('img');
img.src = "imageUr1";
img.alt =" location";

article.appendChild(heading3);
article.appendChild(img);

templesElement.appendChild(article);

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

    const response = await fetch (url);
    templeList = await response.json();
    displayTemples(templeList);
  
}

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
