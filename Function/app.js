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

