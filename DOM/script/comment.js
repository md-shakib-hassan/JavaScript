document.getElementById('title').style.color='pink';
const deco = document.getElementsByClassName('comment');

for(const item of deco){
    item.style.backgroundColor="orange";
    item.style.color="white";
    item.style.padding='10px';
    item.style.borderRadius ='10px';
}

document.getElementById('btn').addEventListener('click',function(){
    const comment = document.getElementById('comment-here');
    const uploadComment = document.getElementsByClassName('comment');

    // here upload a p tag which i comment 

    // for(const item of uploadComment){
    //     item.innerText = comment.value;
    // }

    // need to create appendChild() and upload it;





  
});