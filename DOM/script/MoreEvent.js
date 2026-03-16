
// here start for mouse event mouseEnter when it mouse enter a event that work



document.getElementById('name').addEventListener('mouseenter',function(){
    console.log("MouseEnter.");
});


// mouse Move start when it's mouse are move between Event targeted 

document.getElementById('name').addEventListener('mousemove',function(){
    console.log("MouSEmOVE.");
});


// it's count of when mouse out of targeted element 

document.getElementById('btn').addEventListener('mouseout',function(){
    console.log("MouseOUT.");
});


// for focus and blur element 

const address = document.getElementById('address');

address.addEventListener('focus',function(){
    address.style.borderColor = '2px solid red';
    console.log("work")
});

// target for blur 
document.getElementById('address').addEventListener('blur',function()
{
    console.log("Now blur the targeted element.");
});

