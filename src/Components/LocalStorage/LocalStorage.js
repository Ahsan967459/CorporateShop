

const StoreDonateData=()=>{
    const localData = localStorage.getItem("cart");
    if(localData){
        return JSON.parse(localData);
    }
    return [];
}

const saveCartToLS=cart=>{
    const cartStingified=JSON.stringify(cart)
    localStorage.setItem("cart",cartStingified);
}

const addToLs=id=>{
    const cart =StoreDonateData();
    cart.push(id);
    saveCartToLS(cart);
}

const removeToLs=id=>{
    const cart=StoreDonateData();
    const index = cart.indexOf(id);
    if (index !== -1) {
        cart.splice(index, 1);
      }
    saveCartToLS(cart);
}


export {StoreDonateData,addToLs,removeToLs};