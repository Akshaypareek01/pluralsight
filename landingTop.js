document.getElementById("platform").addEventListener("click",displayplatform);
document.getElementById("products").addEventListener("click",displayproducts);
document.getElementById("resources").addEventListener("click",displayresources);
var platform = document.getElementById("platformBackground");
var products = document.getElementById("productsBackground");
var resources = document.getElementById("resourcesBackground");

function displayplatform() {
    if(true) {
        products.style.display = "none";
        resources.style.display = "none";
    }
    if(platform.style.display == "none") {
        platform.style.display = "block";
    }
    else {
        platform.style.display = "none";
    }
}
function displayproducts() {
    if(true) {
        platform.style.display = "none";
        resources.style.display = "none";
    }
    if(products.style.display == "none") {
        products.style.display = "block";
    }
    else {
        products.style.display = "none";
    }
}
function displayresources() {
    if(true) {
        products.style.display = "none";
        platform.style.display = "none";
    }
    if(resources.style.display == "none") {
        resources.style.display = "block";
    }
    else {
        resources.style.display = "none";
    }
}