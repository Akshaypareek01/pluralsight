
// document.querySelector("form").addEventListener("submit", addcrd);
var arr=JSON.parse(localStorage.getItem("login"))||[];
function addcrd(){
    event.preventDefault();

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    console.log( email, password);
    var ans = false;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].email==email && arr[i].password == password) {
            ans = true;
            break;
        }
        
    }
    if(email =="" || password == "") {
        alert("You have written incorrect email or password");
    }
    else if(ans) {
        alert("Login Successful");
        location.href="../landingTop.html"
    }else {
        alert("You have written incorrect email or password");
    }

}

document.getElementById("account").addEventListener("click",displaySignup)
function displaySignup() {
    event.preventDefault();
    location.href="./signup.html";
}