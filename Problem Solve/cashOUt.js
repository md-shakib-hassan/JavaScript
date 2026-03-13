function cashOut( money ) {
         
    if( money>0){
            let charge = (money*(1.75/100));
            
            return charge;
          }else if(money===0){
            return "Invalid";
          }else if(money<0){
            return "Invalid";
          }
}
console.log("charge: "+ cashOut(2000));
console.log("charge: "+ cashOut(0));
console.log("charge : "+cashOut("101"));
console.log("charge : "+cashOut(-355));
console.log("charge : "+cashOut("meoww"));