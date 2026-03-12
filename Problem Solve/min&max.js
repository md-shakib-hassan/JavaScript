console.log("Ki Obostha?");

const arr =[453,45,23,56,,86,423,5,2354];

function getMax(arr){
    let max = arr[0];

    for( let num of arr){
        if (max < num){
            max = num
        }
    }

    return max;
}

console.log("Max Number is : "+getMax(arr));


function getMin(arr){
    let min = arr[0];

    for( let num of arr){
        if (min > num){
            min = num
        }
    }

    return min;
}

console.log("Min Number is : "+getMin(arr));
