
const person ={
    name: "shakib",
    dept : "software",
    passion:"devops",

}

const convert = JSON.stringify(person);

console.log(convert);

// parse used to string to reverse convert into object 

const reverseConvert = JSON.parse(convert);

console.log(reverseConvert);
console.log(typeof reverseConvert);
