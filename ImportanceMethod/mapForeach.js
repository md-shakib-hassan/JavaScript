{
    const names = ["sakib", "rahim", "karim"];

    const upperNames = names.map(name => name.toUpperCase());

    console.log(upperNames);
    // ["SAKIB", "RAHIM", "KARIM"]
}


{
    const users = [
        { name: "Sakib", age: 22 },
        { name: "Rahim", age: 25 }
    ];

    const names = users.map(user => user.name);

    console.log(names);
    // ["Sakib", "Rahim"]
}

// use of map () mind it that it used only on array



{
    

    const products = ["laptop",
        "mouse",
        "keyboard",
        "bou"];

    const newProducts = products.map(product => {
        console.log("name:", product);
    });

    console.log( typeof newProducts);

}


// map() with two parameter index,elementValue

{
    const friends = ["shakib","juwel","samim"];

    const newFriends = friends.map((element,index)=>
    {
      
        console.log(index,element);

        return element.toUpperCase();
    })

    console.log(newFriends);

}

//  forEach it like map without create a array 
{
    const products = [
        {id:1 , name:"laptop", price:20000, band:"hp"},
        {id:2 , name:"pant", price:2000, band:"easy"},
        {id:3 , name:"mouse", price:2000, band:"asus"},
        {id:4 , name:"keyboard", price:200, band:"hp"},
        {id:5 , name:"harddisk", price:20000, band:"intel"},
    ];

    products.forEach((value)=>{
         if(value.price>1500){
            console.log(value.price);
         }
    })
}


