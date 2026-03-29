const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'
];


const fetchAPi = async (urls)=>{

    console.log("I am first.");
    console.log("I am Second.");

    fetch(urls.map(url=>{
        
    }))


    console.log("i am last.");

}