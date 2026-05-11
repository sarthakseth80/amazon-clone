export const cart = [{
   productId :  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",       // insert to Cart array if unique product Selected
      quantity : 2
},{
   productId :  "15b6fc6f-327a-4ec4-896f-486349e85a3d",       // insert to Cart array if unique product Selected
      quantity : 1
} ]; 
// All cart functalities here

export function addToCart(productId){  // Exported so that we can use this in amazon.js file 
  let matchingItem;
       cart.forEach((item) => {
      
      if(productId === item.productId){
        matchingItem =item ;         
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1     // increment the quantity by 1 if product alredy present in the card
    }

    else{
     cart.push(
      {
      productId : productId ,       // insert to Cart array if unique product Selected
      quantity : 1
     });
    }
}

