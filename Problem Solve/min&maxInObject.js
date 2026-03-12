

const mobile =[
    {name:"Xiaomi", price: 25000, model:"Note 13"},
    {name:"Samsung", price: 80000, model:"S24"},
    {name:"Iphone", price: 125000, model:"16 pro max"}

];

function maxPrice(arr){
    let max=arr[0];

    for(let item of arr){
        if(item.price>max.price){
            max=item
        }
    }

    return max;
}

console.log("Here the highest price of mobile: ",maxPrice(mobile));

function minPrice(arr){
    let min=arr[0];

    for(let item of arr){
        if(item.price<min.price){
            min=item
        }
    }

    return min;
}

console.log("Cheatest price mobile: ",minPrice(mobile));