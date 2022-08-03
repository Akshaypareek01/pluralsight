document.querySelector("form").addEventListener("submit", addcrd);
var arr = JSON.parse(localStorage.getItem("login")) || [];
function addcrd(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
   
    var password=document.querySelector("#password").value;
    var Contactnumber=document.querySelector("#Contactnumber").value;

    var ob= {name: name, email: email,password: password, Contactnumber: Contactnumber};
    arr.push(ob)
    localStorage.setItem("login",JSON.stringify(arr));
    window.location.href="signin.html";
}