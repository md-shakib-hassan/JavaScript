console.log("kamon achan vai shab?");
const obj ={
    name : "Shakib",
    age : 23,
    Home: "Pabna",
    Dept: "Software Engineer.",
    CGPA :"Bolbo na apnke."
};
  obj.balance="garib";
console.log("Name :"+obj.name);

console.log("Finacial: "+obj.balance);


// assign object properties and value out of object 
const person ={};

person.firstName = "Hasib";
person.lastName ="Rahman";
person.age = 11;

console.log("NAME: "+person.firstName+" "+person.lastName);

// Create Object using New keyword

const Properties = new Object({
        Model : "BMW",
        Year : 2020,
        Manufacture : "JAPAN",
});

console.log("Car Name: "+Properties.Model);


// Object Method 

const Song = {
    singer: "Shubh",
    Song_NAME: "You and Me",
    lOVE: "Guns",
    Work: function(){
        return this.singer+" LOves "+this.lOVE;
    }
};

console.log("LoVE: "+Song.Work());


// Deleting some properties in object

const mobile ={
    band : "Samsung",
    model: "S24",
    Year : "2022",
    updateModel: "S26 Ultra",
};

delete mobile.model;
console.log("Model: "+mobile.model);


// Is a property exist or not 

const classIn ={
    name: "Topu ",
    lastName :"Dey",
    CGPA :3.25
};

let result =("Activity" in classIn);

console.log("Exists: "+result);

// Nested Object 

const myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
};

console.log("Car number 2 is : "+myObj.myCars.car2);

// 



