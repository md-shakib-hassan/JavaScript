const addStoreage = () => {
    const age = 10;
    localStorage.setItem("myage", age);

    localStorage.setItem("name", "shakib");

    console.log(localStorage.getItem("name"));

    console.log(localStorage.getItem("myage"));


    const person = {
        name: "shakib",
        age: 20,
        address: "pabna",
        frnd: ["juwel", "shamim"],
    }

    const convertToString = JSON.stringify(person);

    localStorage.setItem("Shakib",convertToString);

    const convertObject = JSON.parse(convertToString);

    console.log(convertObject.frnd[0]);

}

