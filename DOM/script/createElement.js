const color = document.getElementById("divlist");
color.style.backgroundColor='violet';

color.style.padding='20px';
 color.style.borderRadius='12px';

const lists = document.getElementsByTagName('li');

for(const item of lists ){
    item.style.color='white';
    item.style.margin='20px';
    item.style.fontSize='20px';
}

// now i want add creatElement() and appendChild() 
const item = document.createElement('li');
item.innerText ='appendChild item';
color.appendChild(item);


// now i want add prepend()
const item2 =document.createElement('li');
item2.innerText='prepend item'
color.prepend(item2);


for(const item of lists ){
    item.style.color='white';
    item.style.margin='20px';
    item.style.fontSize='20px';
}