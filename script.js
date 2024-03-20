let product_total_amt=document.querySelector('#product-total-amt');
let total_cart_amt=document.querySelector('#total_cart_amt');
let shipping_charge=document.querySelector('#shipping_charge');
let discount=document.querySelector("#discount-code1");

const decreaseNumber=(incdec,itemprice)=>{
  let itemval=document.querySelector(incdec);
  let itemp=document.querySelector(itemprice);
  if(itemval.value<=0){
    itemval.value=0;
    alert('negative quantity not allowed');
  }
  else{
    itemval.value=parseInt(itemval.value)-1;
    itemp.innerHTML=parseInt(itemp.innerHTML)-15;
    product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-15;
    total_cart_amt.innerHTML=parseInt(shipping_charge.innerHTML)+parseInt(product_total_amt.innerHTML);
    itemval.style.background='#fff';
    itemval.style.color='#000';
  }
}
const increaseNumber=(incdec,itemprice)=>{
  let itemval=document.querySelector(incdec);
  let itemp=document.querySelector(itemprice);
  if(itemval.value>=5){
    itemval.value=5;
    alert('max 5 allowed');
    itemval.style.background='red';
    itemval.style.color='#fff';
    
  }
  else{
    itemval.value=parseInt(itemval.value)+1;
    itemp.innerHTML=parseInt(itemp.innerHTML)+15;
    product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+15;
    total_cart_amt.innerHTML=parseInt(shipping_charge.innerHTML)+parseInt(product_total_amt.innerHTML);
  }
}

const discount_code=()=>{
  let total_amt=parseInt(total_cart_amt.innerHTML);
  let error_trw=document.getElementById('error_trw');
  
  if(discount.value==="webdev"){
    if(parseInt(product_total_amt.innerHTML)===0){
      alert("Cannot apply coupon code.")
    }
    else{
      let newtotal=total_amt-15;
      total_cart_amt.innerHTML=newtotal;
      error_trw.innerHTML="Hurray! code is valid";
    }
  }
  else{
    error_trw.innerHTML="Try Again! Valid Code is 'webdev'";
  }
}