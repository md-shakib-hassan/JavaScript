

// querySelector start from here

console.log("HERE querySelector.");

const para = document.querySelector('.para');

para.style.color='green';



//  here querySelectorAll used.

const allPara = document.querySelectorAll('.para');

for(const item of allPara){
    item.style.color='blue';
}




