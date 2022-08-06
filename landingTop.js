document.getElementById("platform").addEventListener("click",displayplatform);
document.getElementById("products").addEventListener("click",displayproducts);
document.getElementById("resources").addEventListener("click",displayresources);
document.getElementById("signin").addEventListener("click",displaysignin);
var platform = document.getElementById("platformBackground");
var products = document.getElementById("productsBackground");
var resources = document.getElementById("resourcesBackground");
var signin = document.getElementById("signinBackground");

window.onscroll = function() {scrollRun()};
function scrollStop() {
  if (document.documentElement.scrollTop > 0) {
    true;
  }
}

function scrollStop() {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop = 0;
    }
  }

function crossFn() {
    if(platform.style.display=="block") {
        console.log(34);
        platform.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else if( products.style.display=="block") {
        products.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else if(resources.style.display=="block") {
        resources.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else if(signin.style.display=="block") {
        signin.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
}

function displayplatform() {
    if(true) {
        products.style.display = "none";
        resources.style.display = "none";
        signin.style.display = "none";
    }
    if(platform.style.display == "block") {
        platform.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else {
        platform.style.display = "block";
        window.onscroll = function() {scrollStop()};
    }
}
function displayproducts() {
    if(true) {
        platform.style.display = "none";
        resources.style.display = "none";
        signin.style.display = "none";
    }
    if(products.style.display == "block") {
        products.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else {
        products.style.display = "block";
        window.onscroll = function() {scrollStop()};
    }
}
function displayresources() {
    if(true) {
        products.style.display = "none";
        platform.style.display = "none";
        signin.style.display = "none";
    }
    if(resources.style.display == "block") {
        resources.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else {
        resources.style.display = "block";
        window.onscroll = function() {scrollStop()};
    }
}
function displaysignin() {
    if(true) {
        products.style.display = "none";
        platform.style.display = "none";
        resources.style.display = "none";
    }
    if(signin.style.display == "block") {
        signin.style.display = "none";
        window.onscroll = function() {scrollRun()};
    }
    else {
        signin.style.display = "block";
        window.onscroll = function() {scrollStop()};
    }
}

function displaysigninPage() {
    location.href="./signin&signuppage/signin.html";
}
function displayflow() {
    location.href="./Products_Flow_Page/flowLanding_Page.html";
}

function displayskills() {
    location.href="./Product_Skills_Lpage/Product_Skills_LPage.html";
}

function displayskillsfromflow() {
    location.href="../Product_Skills_Lpage/Product_Skills_LPage.html"
}

function displayflowfromflow() {
    location.href="../Products_Flow_Page/flowLanding_Page.html"
}

function displayskillsfromcourses() {
    location.href="../Product_Skills_Lpage/Product_Skills_LPage.html"
}

function displayflowfromcourses() {
    location.href="../Products_Flow_Page/flowLanding_Page.html"
}

function displaysigninPagefromflow() {
    location.href="../signin&signuppage/signin.html";
}

function displayskillsfromskills() {
    location.href="../Product_Skills_Lpage/Product_Skills_LPage.html";
}

function displayflowfromskills() {
    location.href="../Products_Flow_Page/flowLanding_Page.html"
}

function displaysigninPagefromskills() {
    location.href="../signin&signuppage/signin.html";
}

function displayskillsfromtryforfree() {
    location.href="../Product_Skills_Lpage/Product_Skills_LPage.html"
}

function displayflowfromtryforfree() {
    location.href="../Products_Flow_Page/flowLanding_Page.html";
}

function displaysigninPagefromtryforfree() {
    location.href="../signin&signuppage/signin.html";
}