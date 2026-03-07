console.log("Hello, Lok jon.");

// Start Array
const cars = ["BMW", "TOYOTA", "AUDI"];
console.log("Car Name: " + cars[2]);

const name = [];

name[0] = "shakib";
name[1] = "hasib";
name[2] = "nasib";

console.log("name: " + name[1]);


// using new keyword to create Array

const dept = new Array("ict", "cste", "Se", "phar");

console.log("dept: " + dept[3]);

// console.log("Converting array to String :"+cars.toString); that was wrong
const list = dept.toString();
document.getElementsByClassName("demo").innerHTML = list;

console.log(list);
//  there are some properties of length and sorting 

// dept.lenght
// dept.sort();

console.log("the length: " + dept.length);

// sort using in array
// that importance

let arr = [7, 9, 3, 56, 234, 754];

arr.sort((a, b) => a - b);

console.log("After Sorting: " + arr);

// push in array

arr.push(4);
let len = arr.length;

for (let i = 0; i < len; i++) {
    console.log("here: " + arr[i])
}

// here modern use in javascript and react is use forEach()
// here forEach like traver a element 


let arr2 = [10, 20, 403, 40, 50, 540];

// arr2.forEach((value)=>{
//     console.log(value);
// });

arr2.forEach((value) => console.log(value));

// using array index at() function
console.log("at index: " + arr2.at(4));

// using of array operator that is ar toString() function which also convert into string


let array = ["ict", "cse", "se"];

console.log(array.join());


// pop using in array 

console.log("poping: " + array.pop());
array.forEach((value) => console.log(value));

// push function

array.push("social work");
console.log("After push");
array.forEach((value) => console.log(value));

//  using of shift =removve first element of a array

let array2 = [10, 20, 30];

let removed = array2.shift();

console.log("Removed:", removed);
console.log("Array now:", array2);


// using unshift() = add method adds at beginning 

let array3 = [20, 30, 40];

let newLength = array3.unshift(10);

console.log("New Length:", newLength);
console.log("Array Now:", array3);


// join( ) used for join array to string

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log("Result: " + fruits.join(" * "));
}

// concatiing two or more array

{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const number =[4,32,45,56];

    const myChildren = myGirls.concat(myBoys,number);
    console.log("Merging array: "+myChildren);
}