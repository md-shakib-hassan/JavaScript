

// querySelector start from here

console.log("HERE querySelector.");

const para = document.querySelector('.para');

para.style.color='green';



//  here querySelectorAll used.

const allPara = document.querySelectorAll('.para');

for(const item of allPara){
    item.style.color='blue';
}


// here change text of p all selector what i selected


// for(const item of allPara){
//     item.innerText = "sdjfkskdfh";
// }

for(const item of allPara){
    item.innerHTML="shakib";
}

for(const item of allPara){
    item.textContent="Director of Engineering."
}

