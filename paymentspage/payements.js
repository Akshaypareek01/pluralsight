


function displaypaymentmode() {
    event.preventDefault();
    var count = 0;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var confirmemail = document.getElementById("confirmemail").value;
    var country = document.getElementById("country").value;


    if(firstname === "") {
        count++;
    }
    if(lastname === "") {
        count++;
    }
    if(email === "") {
        count++;
    }
    if(confirmemail === "") {
        count++;
    }
    if(country === "-Select One-") {
        count++;
    }
    console.log(count);
    if(email != confirmemail) {
        alert("Write correct Email")
    }
    else if(count>0) {
        alert("Fill all details");
    }
    else {
        location.href="../paymentspage/payements-2.html"
    }
}

var paymentArr = JSON.parse(localStorage.getItem("course_list"));
var price = Number(paymentArr[0].price);
//console.log(price );
document.getElementById("course_price").innerText = price;
var tax = ((price*18)/100); 
document.getElementById("tax").innerText = tax;
var sum = price + tax;
document.getElementById("coursetotal_price").innerText = sum;

