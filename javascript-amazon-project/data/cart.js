export const cart = []; 
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

