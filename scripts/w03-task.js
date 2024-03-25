/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}

function addNumbers ()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
     

    const addition = add(addNumber1, addNumber2)

    document.querySelector('#sum').value= addition;

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const Subtract = function (SubtractOne,SubtractTwo){

    let SubtractOne = Number(document.querySelector('subtract1').value);
    let SubtractTwo = Number(document.querySelector('Subtract2').value);
    
    document.querySelector('#subtractNumbers').value= Subtract(SubtractOne,SubtractTwo);
}



/* Arrow Function - Multiply Numbers */

///(number1, number2) => {
  //  return number1 * number2;
///};


 function multiply (multiply1, multiply2)
 {
 let multiply1 = Number(document.querySelector('#factor1').value); 
 let multiply2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#multiplyNumbers').value=(multiply1,multiply2);
 }


/* Open Function Use - Divide Numbers */
function divide (number1, number2)
{
    return number1 / number2;
}

function divideNumbers (divideNumber1, divideNumber2)
{
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#divideNumbers').value= divide(divideNumber1,divideNumber2);

}

document.querySelector('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

let numeric = document.querySelector('numeric')
/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
numbersArray=document.querySelector('array')
 

/* Output Source Array */

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML= numbersArray.filter(number => number % 2===1 );
/* Output Evens Only Array */
document.querySelector('#odds').innerHTML= numbersArray.filter(number => number % 2===0 );
/* Output Sum of Org. Array */
numbersArray.reduce((sum,number)=> sum + number);
/* Output Multiplied by 2 Array */
numbersArray.map(number => number*2);
/* Output Sum of Multiplied by 2 Array */
multipliednumbers= numbersArray.map(number => number*2);
multipliednumbers= numbersArray.map(number => number*2);