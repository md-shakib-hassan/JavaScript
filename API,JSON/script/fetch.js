
const button =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

// many user details show 


const button2 = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json)
      .then(data => {
        console.log(data);
        userHandle(data);
      })
}

const userHandle = (users)=>{
  console.log(users);
}