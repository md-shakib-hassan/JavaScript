

document.getElementById('btn').addEventListener('click',function(){

    const Comment =document.getElementById('comment-here');
    const uploadedCmmt = Comment.innerText;

    const newComment = document.createElement('p');

    newComment.innerText=Comment.value;

    const parent = document.getElementById('parent');
    newComment.classList.add('comment');

    parent.appendChild(newComment);

    Comment.value='';
  
});







