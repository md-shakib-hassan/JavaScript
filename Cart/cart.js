const addtoCart =()=>{

   const productName = document.getElementById('productName');
   const productQuantity = document.getElementById("productQuantity");

   const name = productName.value;
   const quantity = productQuantity.value;

    displayProduct(name,quantity);

    cart(name,quantity);

    productName.value="";
    productQuantity.value="";
    
}

const displayProduct = (productName,productQuantity)=>{

    const container = document.getElementById('cartContainer');

   const li = document.createElement('li');

   li.innerText=`ProductName: ${productName} || Quantity: ${productQuantity}
     
   `
   container.appendChild(li);

 cart(li.innerText);

}

const cart =(productName,productQuantity)=>{
    
    const item = {
        name: productName,
        quantity: productQuantity,
    };

    localStorage.setItem('cart',JSON.stringify(item));

    
}