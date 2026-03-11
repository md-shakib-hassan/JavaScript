

function duplicate(arr){
    const unique =[];

    for (let item of arr){
        if(unique.includes(item)===false){
            unique.push(item);

        }
    }
    return unique;
}


  let arr =[12,34,56,87,21,12,56,0,3,72,7,4,3];
console.log("Unique array: "+duplicate(arr));