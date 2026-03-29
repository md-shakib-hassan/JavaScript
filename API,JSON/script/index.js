
// here the using loop and create unoder list and include that li 

const btn3 = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            userList(data);
        })
}

const userList =(users)=>{
    const listContainer = document.getElementById('listContainer');

    for(const user of users){
        const li = document.createElement('li');

        li.innerText=user.name;

        listContainer.appendChild(li);

    }
}