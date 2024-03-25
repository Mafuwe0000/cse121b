/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Mafuwe Manuel",
    photo : 'images/placeholder.jpg',
    favoriteFoods : ['Pasta', 'Churros', 'Chicken', 'Mandioca','Lagosta'],
    hobbies : ['Dormir', 'Passear','Estar na igreja', 'Comer'],
    placesLived: []
};
myProfile.placesLived.push(
    {
        place: 'T3, Matola ',
        length : '3 years'
    }
)




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Zona Verde, Matola ',
        length : '2 years'
    }
)
myProfile.placesLived.push(
    {
        place: 'C700, Matola ',
        length : '4 months'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src=myProfile.photo

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent= food;
    document.querySelector('#favorite-foods').appendChild(li);
    
});


/* Hobbies List */
myProfile.hobbies.forEach(lazer => {
    
    let ul = document.createElement('ul');
    ul.textContent=lazer;
    document.querySelector('#hobbies').appendChild(ul);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let dt = document.createElement('dt');
    dt = myProfile.hobbies.appendChild(place);



    let dd = document.createElement('dd');
    dd = myProfile.hobbies.appendChild(length);

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

    
});




