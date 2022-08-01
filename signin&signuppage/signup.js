document.querySelector("form").addEventListener("submit", addcrd);
var arr=[];
function addcrd(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
   
    var password=document.querySelector("#password").value;
    var Contactnumber=document.querySelector("#Contactnumber").value;
    console.log(name, email, password, Contactnumber);

    var ob= {name: name, email: email,password: password, Contactnumber: Contactnumber};
    arr.push(ob)
    localStorage.setItem("login",JSON.stringify(arr))
}