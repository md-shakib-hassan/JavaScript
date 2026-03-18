const dept = new Array("ict", "cste", "Se", "phar");

// console.log("dept: " + dept[3]);

// spread Operator in Array 

{
    const arr = [3,45,56,34,67,89];

    console.log("Using Spread Operator: ",...arr);

    // also using Math.max();

    console.log("Max element: ",Math.max(...arr));

    // copying array into array;

    const newArr = [345,45,345,...arr,534,465];
    console.log("Copying Array using Spread Operator:",...newArr);
}


// array Destructuring 

{
    const arr = [ "ss" ,"shakib","jai hok","Software","Engineer"];

    const [emni,name,moja,dept,profession]=arr;

    console.log(emni);
    console.log(name);
    
}