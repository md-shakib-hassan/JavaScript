console.log("Hello JavaScript.");

let firstName ="Shakib";
let age =23;
let dept = "Software Engineering";

function addDetails(firstName, age, dept){
   console.log(firstName+ "\n"+ age + "\n"+ dept);

}
addDetails(firstName, age, dept);

console.log("here i income with bonus. \n");

let income= 50000.00;
let bonus = .3;
let total;
 
function totalBeforeEid(income, bonus){
    return income+(income*bonus)+"taka";
}
console.log(totalBeforeEid(income,bonus));

// function expression
console.log("here now i function expression.");
let a =4 , b=5;
const multi = function(a,b){ return a*b;};

console.log(multi(a,b));


// ARROW function 

const add =(a,b) => a+b;
console.log(add(a,b));