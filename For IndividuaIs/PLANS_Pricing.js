
var a=0;
function myFunction() {
    a++;
    var price1=document.getElementById("price-div-1");
    var price2=document.getElementById("price-div-2");
    var c=document.querySelector(".per-m");
    var d=document.querySelector(".per-m2");
    var e=document.querySelector("#preminum-span");
    var f=document.querySelector("#preminum-span2");
    if(a%2==0){
        
        price1.innerText="₹ 1,499";
        price2.innerText="₹ 2,999";
        f.innerText="";
        e.innerText="";
        e.style.backgroundColor="";
        c.innerText="per month";
        d.innerText="per month";
        
    }
    else{
        price1.innerText="₹ 12,299";
        price2.innerText="₹ 14,711";
        f.innerText="₹ 18,399";
        e.style.backgroundColor=" #F7A614";
        e.innerText="Save 20 %- LIMITED TIME "
        c.innerText="per year";
        d.innerText="per year";
    }
    
}