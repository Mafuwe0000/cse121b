/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.createElement('templesElement');
const element = document.getElementById('temples');
element.append(templesElement);
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples)=>{ 
    const templesDiv = document.getElementById("temples");
    templesDiv.innerHTML="<ol>";

    temples.forEach((element) => {
        templesDiv.innerHTML += `<li>${element.templeName} 

        </li>`;
        let article = document.createElement('article');
        let heading3 = document.createElement('h3');

        heading3.innerHTML = element.templeName;
        
        const img = document.createElement('img');
        
        
        img.src = "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg";
        img.alt =element.location;

        article.appendChild(heading3);
        article.appendChild(img);
        
        templesElement.append(article);

    });

    
    temples.innerHTML  = "</ol>";
    
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

    const response = await fetch (url);
    const templeList = await response.json();
    displayTemples(templeList);
  
}

/* reset Function */
function reset () {
    templesElement.article.clear();

}

/* filterTemples Function */

const filterTemples =(temples) =>{
    reset();

    const filter = document.getElementById('filtered').value;

    switch (key) {
        case "utah":
            if (location == utah)
            displayTemples(filter("utah"))
            
            break;
        case " notuah":
            if (location != utah)
            displayTemples("notutah")

            break
        case "older":
            if (dedicated)

            break

        case "all":
            displayTemples(temples)
            break;
    }
    
}

getTemples();

/* Event Listener */

document.getElementById('filtered').addEventListener('change',() =>{ filterTemples(templeList)});
