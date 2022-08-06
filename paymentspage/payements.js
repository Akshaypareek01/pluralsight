
function displaypaymentmode() {
    location.href="../paymentspage/payements-2.html"
}

var paymentArr = JSON.parse(localStorage.getItem("course_list"));
var price = Number(paymentArr[0].price);
//console.log(price );
document.getElementById("course_price").innerText = price;
var tax = ((price*18)/100); 
document.getElementById("tax").innerText = tax;
var sum = price + tax;
document.getElementById("coursetotal_price").innerText = sum;