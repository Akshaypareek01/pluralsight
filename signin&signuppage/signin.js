
document.querySelector("form").addEventListener("submit", addcrd);
var arr=JSON.parse(localStorage.getItem("login"))||[];
console.log(arr);
function addcrd(){
    event.preventDefault();

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    // console.log( email, password);
    var ans = false;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].email==email && arr[i].password == password) {
            ans = true;
        }
        
    }
    if(ans) {
        alert("Login Successful");
    }else {
        alert("You have written incorrect email or password");
    }

}