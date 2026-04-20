
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


{
  const person = {
    name:"Shakib",
    age:21,
    id:[2,4,2,5,0,2,5],
    family:{
      fatherName:"Shohidul Islam",
      motherName:"Shima Khatun",
      brotherName:"Hasibul Rahman",
    }
    
  }


  const convertStringfy = JSON.stringify(person);

  console.log(convertStringfy);
   const intoObject = JSON.parse(convertStringfy);

   console.log(intoObject);
}