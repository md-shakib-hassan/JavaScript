
// here using of setTimeOut Function which parameter a function and time that occur one time only in especific time 

const oneTimer = setTimeout(() => {
    console.log("Hello, JavaScript!");
},1000);

// here setInterval that used to work a function repeatly but in interval time that occurs again and again in especific time 

 let count = 0;

const repeatTimer = setInterval(() => {
    console.log("I love it.")

    count++;
     if(count>=5){
        // here clearInterval used to stop setInterval () which is infinite loop
        clearInterval(repeatTimer);
    }
    
},2000);

 
