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