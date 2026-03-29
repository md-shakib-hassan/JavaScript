

const loadData = async ()=>{

  try {
      console.log("I am first.");
    console.log("I am Second.");

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await response.json();

    console.log(data)
   
    console.log("i am last.");
    
  } catch (error) {
    console.log("here the error",error);
  }


}
 
loadData();

//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))