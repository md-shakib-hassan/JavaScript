function avg0dd(arr){
    let sum =0;

    for( const num of arr){
        if(num%2!=0){
            sum+=num;
        }
    }
      let result = sum/(arr.length);
        return result;
}

let arr =[3,6,7,8,12,54,78,12,34,67];

console.log("Average of odd number: "+avg0dd(arr));