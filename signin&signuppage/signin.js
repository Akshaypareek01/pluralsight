
document.querySelector("form").addEventListener("submit", addcrd);
var arr=[];
function addcrd(){
    event.preventDefault();

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    console.log( email, password);

    var ob= { email: email, password: password};
    arr.push(ob)
    localStorage.setItem("login",JSON.stringify(arr))
}