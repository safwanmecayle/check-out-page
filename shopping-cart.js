function handleProductChange(product, isIncrese){

    var productInput = document.getElementById (product + '-count');
    var productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrese == true){
       productNewCount = productCount + 1;
    }
    if (isIncrese == false && productCount > 0){
       productNewCount = productCount - 1;
    }   
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
       productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
       productTotal = productNewCount * 59;
    }
    document.getElementById(product +'-total').innerText ='$' + productTotal;
    calculateTotal ();
  }
    function calculateTotal () {

    var phoneInput = document.getElementById ('phone-count');
    var phoneCount = parseInt(phoneInput.value);
    var caseInput = document.getElementById ('case-count');
    var caseCount = parseInt(caseInput.value);
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById ('total-price').innerText ='$' + totalPrice;
    let tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
 }

    // product section using function

//    function handleProductChange(isIncrese){
//       var caseInput = document.getElementById ('case-count');
//       var caseCount = parseInt(caseInput.value);
//       let caseNewCount = caseCount;
//       if (isIncrese == true){
//          caseNewCount = caseCount + 1;
//       }
//       if (isIncrese == false && caseCount > 0){
//          caseNewCount = caseCount - 1;
//       }   
//       caseInput.value = caseNewCount;
//       let caseTotal = caseNewCount * 59;
//       document.getElementById('case-total').innerText ='$' + caseTotal;
// }

//       // product section detailing to understanding

//       document.getElementById ('case-increase').addEventListener('click', function (){ 
//    var caseInput = document.getElementById ('case-count');
//    var caseCount = parseInt(caseInput.value);
//    var caseNewCount = caseCount + 1;
//    caseInput.value = caseNewCount;
//    let caseTotal = caseNewCount * 59;
//    document.getElementById('case-total').innerText ='$' + caseTotal;

// })

//    document.getElementById('case-decrease').addEventListener('click',function () {
//    var caseInput = document.getElementById ('case-count');
//    var caseCount = parseInt(caseInput.value);
//    var caseNewCount = caseCount - 1;
//    caseInput.value = caseNewCount;
//    let caseTotal = caseNewCount * 59;
//    document.getElementById('case-total').innerText ='$' + caseTotal;
//    }) 
          // phone section using function


 //  function handlePhoneChange(isIncrese){
 //    var phoneInput = document.getElementById ('phone-count');
 //    var phoneCount = parseInt(phoneInput.value);
 //    let phoneNewCount = phoneCount;
 //    if (isIncrese == true){
 //       phoneNewCount = phoneCount + 1;
 //    }
 //    if (isIncrese == false && phoneCount > 0){
 //       phoneNewCount = phoneCount - 1;
 //    }   
 //    phoneInput.value = phoneNewCount;
 //    let phoneTotal = phoneNewCount * 1219;
 //    document.getElementById('phone-total').innerText ='$' + phoneTotal;
 //   }

 //    // phone section detailing to understanding


 // document.getElementById ('phone-increse').addEventListener('click', function(){
 // const phoneInput = document.getElementById('phone-count');
 // const phoneCount = parseInt(phoneInput.value);
 // const phoneNewCount = phoneCount + 1;
 // phoneInput.value = phoneNewCount;
 // let phoneTotal= phoneNewCount * 1219;
 // document. getElementById ('phone-total').innerText = "$" + phoneTotal; 
 // })

 // document.getElementById ('phone-decrease').addEventListener('click', function(){
 // const phoneInput = document.getElementById('phone-count');
 // const phoneCount = parseInt(phoneInput.value);
 // const phoneNewCount = phoneCount - 1;
 // phoneInput.value = phoneNewCount;
 // let phoneTotal= phoneNewCount * 1219;
 // document. getElementById ('phone-total').innerText = "$" + phoneTotal; 
 // })
