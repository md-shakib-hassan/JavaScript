{
    const obj = {
        name:"shakib",
        age:23,
        dept:"Software",
        Profession:"Engineer",

    };
// here must use propety name use when destrubturing object 
    const {name,age,dept,Profession}=obj;
    console.log(dept);
    console.log(Profession);
    console.log(name);
    
}

// Option changing with question 

{
    const user = {
    name: "Shakib",
    age:23,
    
};

console.log(user.address?.city); // undefined (no error) here if i don't give question mark that shows error include question marks that shows ( undefined )
}