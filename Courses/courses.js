var coursesArr = [
    {
        course_name : "Managing Software in Linux with Debian Software Management",
        teacher_name: "Andrew Mallett",
        ways_to_learn: "Core Courses",
        time: "1h 58m",
        skill_level: "Beginner",
        rating: "5",
        price: " 10500",
    },
    {
        course_name : "Building Packet Tracer Labs for CCNA Study: Fundamentals",
        teacher_name:"Ros Bagurdes",
        ways_to_learn: " Core Courses",
        time: "5h 20m",
        skill_level: "Intermediate",
        rating: "4.5",
        price: " 10000",
    },
    {
        course_name : "Linux: System Security (LPIC-2)",
        teacher_name: "Andrew Mallett",
        ways_to_learn: "Expanded",
        time: "3h 6m",
        skill_level: "intermediate",
        rating: "5",
        price: " 6500",
    },
    {
        course_name : "Conducting Passive Reconnaissance for CompTIA PenTest+",
        teacher_name: "Dale Maridth",
        ways_to_learn: "Core courses",
        time: "3h 1m",
        skill_level: "Beginner",
        rating: "4.6",
        price: " 1500",
    },
    {
        course_name : "Prism 7 Problems & Solutions: Loading Dependent Views",
        teacher_name: "Brian Lagunas",
        ways_to_learn: "Expanded",
        time: "1h 39m",
        skill_level: "Advanced",
        rating: "4.8",
        price: " 1300",
    },
    {
        course_name : "Microsoft Azure Developer: Configuring CORS Access for Storage",
        teacher_name: "Kamran Ayub",
        ways_to_learn: "Core Courses",
        time: "1h 4m",
        skill_level: "Advanced",
        rating: "4.7",
        price: " 3500",
    },
    {
        course_name : "Create a Serverless EventBus Using Amazon EventBridge",
        teacher_name: "Pawan Purohit",
        ways_to_learn: "Labs",
        time: "50m",
        skill_level: "Beginner",
        rating: "4.5",
        price: " 5500",
    },
    {
        course_name : "Monitor Amazon EC2 Application Logs with Cloudwatch Logs Insights",
        teacher_name: "Garrett Hopper",
        ways_to_learn: "Labs",
        time: "35m",
        skill_level: "Beginner",
        rating: "4.5",
        price: " 9000",
    },
    {
        course_name : "VLAN Operation and Configuration",
        teacher_name: "Ros Bagurdes",
        ways_to_learn: "Core Courses",
        time: "2h 21m",
        skill_level: "intermediate",
        rating: "4.6",
        price: " 13000",
    },
    {
        course_name : "Implementing Data Visualizations",
        teacher_name: "mihela Danci",
        ways_to_learn: "Expanded",
        time: "2h 43m",
        skill_level: "Advanced",
        rating: "4",
        price: " 20000",
    },
    {
        course_name : "Foundational TCP Analysis with Wireshark",
        teacher_name: "Chris Greer",
        ways_to_learn: "Core Courses",
        time: "2h 7m",
        skill_level: "Intermediate",
        rating: "4.3",
        price: " 2000",
    },
    {
        course_name : "STP and EtherChannel Operation and Configuration",
        teacher_name: "Ros Bagurdes",
        ways_to_learn: "Core Courses",
        time: "3h 32m",
        skill_level: "Beginner",
        rating: "4.7",
        price: " 5000",
    },
    {
        course_name : "Configuring and Managing Microsoft 365 Workload Integrations",
        teacher_name: "Vlad Cratinuscu",
        ways_to_learn: "Labs",
        time: "3h 45m",
        skill_level: "Intermediate",
        rating: "4",
        price: " 16000",
    },
    {
        course_name : "Working with Styles in Xamarin.Forms 4 Applications",
        teacher_name: "Thomas Claudius Huber",
        ways_to_learn: "Core Courses",
        time: "1h 47m",
        skill_level: "Intermediate",
        rating: "4.6",
        price: " 19500",
    },
    {
        course_name : "Deploying Value with Kanban",
        teacher_name: "Michael Krawoski",
        ways_to_learn: "Expanded",
        time: "2h 33m",
        skill_level: "Intermediate",
        rating: "4.8",
        price: " 15500",
    },
    {
        course_name : "Getting Started with NetApp ONTAP",
        teacher_name: "Peter Van",
        ways_to_learn: "Expanded",
        time: "2h 2m",
        skill_level: "Beginner",
        rating: "4.7",
        price: " 10300",
    },
    {
        course_name : "Creating Data Integrations with SharePoint Framework",
        teacher_name: "Rick Daniel",
        ways_to_learn: "Core Courses",
        time: "2h 2m",
        skill_level: "Intermediate",
        rating: "4.9",
        price: " 14500",
    },
    {
        course_name : "Create an AMI (Amazon Machine Image) from an Existing EC2 Instance",
        teacher_name: "Was Nowak",
        ways_to_learn: "Labs",
        time: "35m",
        skill_level: "Advanced",
        rating: "4",
        price: " 21000",
    },
    {
        course_name : "Amazon API Gateway Lab: Receive SQS Messages with HTTP API Integration",
        teacher_name: "Rick Fork",
        ways_to_learn: "Labs",
        time: "35m",
        skill_level: "Beginner",
        rating: "4.5",
        price: " 7000",
    },
    {
        course_name : "Drawing Storyboards for the Entertainment Industry in Photoshop",
        teacher_name: "Alex Stead",
        ways_to_learn: "Expanded",
        time: "2h 31m",
        skill_level: "Advanced",
        rating: "4.8",
        price: " 21000",
    },
    
]
display_courses(coursesArr);
function display_courses(coursesArr) {
    document.querySelector(".content_course").innerHTML = null;
    coursesArr.map(function(elem,index) {
        var coursediv = document.createElement("div");
        coursediv.addEventListener("click",function(){
            displaypayment(elem);
        });
        coursediv.setAttribute("class","coursediv");

        var h3 = document.createElement("h3");
        h3.innerText = elem.course_name;

        var h5 = document.createElement("h5");
        h5.innerText = "by " + elem.teacher_name;

        var innerdiv = document.createElement("div");
        innerdiv.setAttribute("class","courseinnerdiv")

        var innerdiv1 = document.createElement("div");
        innerdiv1.innerText = elem.ways_to_learn;

        var innerdiv2 = document.createElement("div");
        innerdiv2.innerText = elem.time;

        var innerdiv3 = document.createElement("div");
        innerdiv3.innerText = elem.skill_level;

        var innerdiv4 = document.createElement("div");
        innerdiv4.setAttribute("class","stardiv");
        var innerdiv4_o = document.createElement("div");
        innerdiv4.innerText = elem.rating;
        innerdiv4_o.innerHTML = '<i class="fa-solid fa-star"></i>';

        var innerdiv5 = document.createElement("div");
        innerdiv5.innerText = `₹ ${elem.price} /-`;

        innerdiv4.append(innerdiv4_o);
        innerdiv.append(innerdiv1,innerdiv2,innerdiv3,innerdiv4,innerdiv5);
        coursediv.append(h3,h5,innerdiv);

        document.querySelector(".content_course").append(coursediv);

    })
}

function sortbyFn() {
    document.querySelector(".content_course").innerText = "";
    var selected = document.getElementById("selectSort").value;
    if(selected == "Sort By") {
        true;
    }
    else if(selected == "Highest Rated") {
        coursesArr = coursesArr.sort(function(a,b) {
            return Number(b.rating) - Number(a.rating);
        })
    }
    else if(selected == "Course A to Z") {
        coursesArr = coursesArr.sort(function(a,b) {
            if(a.course_name > b.course_name) return 1;
            if(a.course_name < b.course_name) return -1;
            return 0;
        })
    }
    else if(selected == "Course Z to A") {
        coursesArr = coursesArr.sort(function(a,b) {
            if(a.course_name > b.course_name) return -1;
            if(a.course_name < b.course_name) return 1;
            return 0;
        })
    }
    else if(selected == "Price") {
        coursesArr = coursesArr.sort(function(a,b) {
            return Number(a.price) - Number(b.price);
        })
    }
    //console.log(coursesArr);
    display_courses(coursesArr);
}
function displaysigninPage1() {
    location.href="../signin&signuppage/signin.html";
}


var paymentArr = [];
function displaypayment(elem) {
    paymentArr.push(elem);
    localStorage.setItem("course_list",JSON.stringify(paymentArr));
    location.href="../paymentspage/payments.html"
}

let filteredArr = coursesArr;
var sortedArr = [];
var checksearch = false;
function ways(value) {
    if(checksearch === true) {
        if(value === "All") {
            checksearch = false;
            sortedArr = coursesArr;
            display_courses(coursesArr);
        }
        else {
            sortedArr = filteredArr.filter(function(elem) {
                if(elem.ways_to_learn === value) {
                    return elem;
                }
                else if( elem.skill_level === value){
                    return elem;
                }
        })
        display_courses(sortedArr);
        }
    }
    else {
        if(value === "All") {
            sortedArr = coursesArr;
            display_courses(coursesArr);
        }
        else {
            sortedArr = coursesArr.filter(function(elem) {
                if(elem.ways_to_learn === value) {
                    return elem;
                }
                else if( elem.skill_level === value){
                    return elem;
                }
        })
        display_courses(sortedArr);
        }
    }
}

document.querySelector(".headingways").addEventListener("click",ease);

function ease() {
    // console.log(34);
    document.querySelector(".headingways + div").classList.toggle("animation")
}

let keyword = document.getElementById("search");

keyword.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        filteredArr = coursesArr.filter((el) => {
            if (el.course_name.includes(keyword.value) || el.course_name.toLowerCase().includes(keyword.value)) {
                return el;
            } else if (el.ways_to_learn === keyword.value || el.ways_to_learn.toLowerCase() === keyword.value) {
                return el;
            } else if (el.teacher_name.includes(keyword.value) || el.teacher_name.toLowerCase().includes(keyword.value)) {
                return el;
            } else if (el.skill_level === keyword.value || el.skill_level.toLowerCase() === keyword.value) {
                return el;
            }
        })
        if (filteredArr.length === 0) {
            var nosearch = document.createElement("h2");
            nosearch.innerText = "No result found";
            document.querySelector(".content_course").innerHTML = null;
            document.querySelector(".content_course").append(nosearch);
        } else {
            checksearch = true;
            display_courses(filteredArr);
        }
    }

})