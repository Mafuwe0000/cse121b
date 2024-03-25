/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}
console.log(add(1,2));

function addNumbers ()
{
    const number1 = parseInt(document.getElementById('add1').value);
    const number2 = parseInt(document.querySelector('#add2').value);
    
    
    const sum = add(number1, number2);
    document.querySelector('#sum').value= sum;

    

    

}

document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2
}


const subtractNumbers = function ()
{
    const number1 = parseInt(document.getElementById('subtract1').value);
    const number2 = parseInt(document.getElementById('subtract2').value);
    const subtractNumbers = subtract(number1,number2);

    document.querySelector("#difference").value=subtractNumbers;


}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
multiply = (number1, number2)=> number1 * number2


 multiplyNumbers=()=>{
    const number1 = parseInt(document.getElementById('factor1').value);
    const number2 = parseInt(document.getElementById('factor2').value);

    const multiplyNumbers = multiply(number1, number2)
    document.querySelector('#product').value = multiplyNumbers
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
divide = (number1, number2)=> number1 / number2


const  divideNumbers= function (){
    const number1 = parseFloat(document.getElementById('dividend').value);
    const number2 = parseFloat(document.getElementById('divisor').value);

    const divideNumbers = divide(number1, number2)
    document.querySelector('#quotient').value = divideNumbers;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function total (number1)
{
    return number * 0,2
}


const getTotalFunction = function () {
    
    let numeric = parseFloat(document.getElementById('subtotal').value);
    let checkBox = document.getElementById('member');
    
    if (checkBox.checked == true){

        return total(numeric)
    }
    document.querySelector('#total').value = total;
}
document.getElementById('getTotal').addEventListener('click',getTotalFunction);

/* ARRAY METHODS - Functional Programming */
let numberedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

/* Output Source Array */
outputarray = document.querySelector('#array');
var arrayAsString = numberedArray.join(',');
outputarray.innerHTML = arrayAsString;

/* Output Odds Only Array */
document.getElementById('odds').innerHTML=numberedArray.filter(number => number % 2===1);
/* Output Evens Only Array */
document.getElementById('evens').innerHTML=numberedArray.filter(number => number % 2===0);
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numberedArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numberedArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
const alreadyMultiplied =numberedArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = alreadyMultiplied.reduce((sum, number)=> sum + number);