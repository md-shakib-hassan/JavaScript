
// here use getattribute() to find attribute

const img = document.getElementById("logo");

const source = img.getAttribute("src");

console.log(source);


// setAttribute()

const img = document.getElementById("logo");

img.setAttribute("src", "newlogo.png");



// removeAttribute()

const img = document.getElementById("logo");

img.removeAttribute("alt");

// hasAttribute()

const link = document.querySelector("a");

console.log(link.hasAttribute("href"));

// Output: true



// here DOM Travesing

// parentElement
const item = document.getElementById("item");

console.log(item.parentElement);


// children 
const menu = document.getElementById("menu");

console.log(menu.children);
// output:
// HTMLCollection(3)


// firstElementChild && lastElementChild
const menu = document.getElementById("menu");

console.log(menu.firstElementChild);
console.log(menu.lastElementChild);



// nextElementSibling
const first = document.querySelector("li");

console.log(first.nextElementSibling);

// previousElementSibling
const contact = document.querySelectorAll("li")[2];

console.log(contact.previousElementSibling);

// output:About

