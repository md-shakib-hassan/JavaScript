
const input = document.getElementById('input');

input.addEventListener('keyup',function(event){
   
    const btn = document.getElementById('btn');
    if(input.value ==='Delete'){
        btn.removeAttribute('disabled');
        document.getElementById('btn').addEventListener('click',function(){
            input.value='';
        })
        
    }else{
        console.log("Something Wrong.")
        btn.setAttribute('disabled',true)
    }
    
})

// succesfully complete

// input.addEventListener('keydown',function(event){
//      console.log("here",input.value);
// });

// input.addEventListener('keyup',function(event){
//     console.log(('Typing: '),input.value);
// })
