console.log("Events.");

document.getElementById("btn-1").addEventListener('click', function(){
    const updatebtn = document.getElementById("btn-1");
    updatebtn.innerText='updated';

});


document.getElementById('btn-2').addEventListener('click',function(){
    const changeColor = document.getElementsByTagName('p');
    
    for( const item of changeColor){
        item.style.color = 'red'
    }
});

document.getElementById('btn-3').addEventListener('click',function(){
    const color = document.getElementById('body');
    color.style.backgroundColor='blue';
});


// for enter name 

document.getElementById('btn-4').addEventListener('click',function(){
    const name = document.getElementById('demo');

    const sendname = document.getElementById('input');   
    name.innerText = sendname.value;

});