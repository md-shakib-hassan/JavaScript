
const design = document.getElementsByTagName('li');
console.log(design[0].innerText);
console.log(design[3].innerText);
design[0].innerText="sdhfjg";


console.log(design[0].innerText);


const section = document.getElementsByTagName('section');

section[0].style.backgroundColor="red";

section[0].style.borderRadius='8px';


// target all li tagname to text into white

const white = document.getElementsByTagName("li");

for( const item of white){
    item.style.color ='white';
   
}





