console.log("Hello World!");

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(length);

{
    let math = "23943+3284239";
    console.log(math);
}


// importance that   ***Comparing two JavaScript objects always returns false.

{
    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;

    console.log(text);
}



{
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    console.log(total);

}

// charAt() used find a char in word

{
    let text = "I am shakib , and i am a student , study SE.";

    let char = text.charAt(6);
    console.log("CHAR IS : " + char);
}


// here charCodeAt(); used to find that char asci value in decimal that used for it.

{
    let text = "Hello world!";
    console.log("CharCodeAT(): " + text.charCodeAt(0));
}


// concat that function use for add two or more string in a string


{
    let name = "shakib";
    let name2 = "hassan ";

    console.log("Using concat: " + name.concat(" ", name2));

}

// here slice() function that create slice of string and recive it.

{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    console.log("using slice : "+part);
}

{
    let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
console.log("using slice : "+part);
}

// If a parameter is negative, the position is counted from the end of the string:

{
    let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
 console.log("using slice : "+part);

}

