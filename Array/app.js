console.log("Hello, Lok jon.");

// Start Array
const cars=["BMW", "TOYOTA","AUDI"];
console.log("Car Name: "+cars[2]);

const name =[];

name[0]="shakib";
name[1]="hasib";
name[2]="nasib";

console.log("name: "+name[1]);


// using new keyword to create Array

const dept = new Array("ict","cste","Se","phar");

console.log("dept: "+dept[3]);

// console.log("Converting array to String :"+cars.toString); that was wrong
const list=dept.toString();
document.getElementsByClassName("demo").innerHTML = list;

