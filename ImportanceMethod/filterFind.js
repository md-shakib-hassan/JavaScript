// using of filter() that create a array with condition and that store that filtering array


{
    const users = [
        { name: "Sakib", age: 22, active: true },
        { name: "Rahim", age: 17, active: false },
        { name: "Karim", age: 25, active: true }
    ];

    const user = users.filter(value => value.active);
    console.log(user);

}

// here start find that similar type of work which is doing filter but it for finding a particular object
{
     const users = [
        { name: "Sakib", age: 22, active: true },
        { name: "Rahim", age: 17, active: false },
        { name: "Karim", age: 25, active: true }
    ];

    const user = users.find(value => value.active===false);
    console.log(user);
    console.log(Array.isArray(user));
}


// try in filter()

{
    const products = [
        {id:1 , name:"laptop", price:20000, band:"hp"},
        {id:2 , name:"pant", price:2000, band:"easy"},
        {id:3 , name:"mouse", price:2000, band:"asus"},
        {id:4 , name:"keyboard", price:200, band:"hp"},
        {id:5 , name:"harddisk", price:20000, band:"intel"},
    ];


    const increase = products.map((product)=> {
        if(product.band==="hp"){
           return product.price+=100;
        }
        return product;
    })

    console.log(Array.isArray (increase));
    // console.log(products);
}