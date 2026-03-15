document.getElementById('title').style.color='pink';
const deco = document.getElementsByClassName('comment');

for(const item of deco){
    item.style.backgroundColor="orange";
    item.style.color="white";
    item.style.padding='10px';
    item.style.borderRadius ='10px';
}

document.getElementById('btn').addEventListener('click',function(){
    
    const uploadComment = document.getElementById('comment-here');
   
    const newComment = uploadComment.value;

    const parent = document.getElementById('parent');
    
    const item = document.createElement('p');
    item.innerText = newComment;
    
     item.classList.add('comment');
    parent.appendChild(item);
    




    // here upload a p tag which i comment 

    // for(const item of uploadComment){
    //     item.innerText = comment.value;
    // }

    // need to create appendChild() and upload it;





  
});