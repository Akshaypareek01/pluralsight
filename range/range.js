var slider=document.getElementById("slider");
        var output=document.getElementById("demo");
        var body=document.getElementById("body");
        var box1=document.getElementById("box1");
        var box2=document.getElementById("box2");
        var box3=document.getElementById("box3");
        box1.style.display='block';
        box2.style.display='none';
        box3.style.display='none';
        function run(val){
            // output.innerHTML=val;
            if(val==0)
            {
                box1.style.display="block";
                box2.style.display="none";
                box3.style.display="none";
            }
            if(val>0)
            {
                box1.style.display="none";
                box2.style.display="flex";
                box3.style.display="none";
            }
            if(val>50)
            {
                box1.style.display="none";
                box2.style.display="none";
                box3.style.display="flex";
            }
        }