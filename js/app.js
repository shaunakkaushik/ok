$( document ).ready(function() {
var text = ["Hi, I am Shaunak","You cannot claim your victories if you cannot accept your defeats - xQc","No need to wait, it loops from here"];
var counter = 0;
var counter1 = 0;
var counter2 = 1;
var s=1;
var elem = document.getElementById("introtext");
function type(){
     if(counter == 3)
     counter = 0;
     if(counter1 < text[counter].length)
     {
          elem.innerHTML += text[counter].charAt(counter1);
          counter1++;
          setTimeout(type,100);
     }
     else{
          setTimeout(erase,1000);
     }
}
function erase(){
    if(counter1 >= 0)
    {
         elem.innerHTML = elem.innerHTML.substring(0,counter1-1);
         counter1--;
         setTimeout(erase,100);
    }
    else{
         counter ++ ;
         setTimeout(type,100);
    }
}
setInterval(() => {
     if(cursor) {
       document.getElementById('cursor').style.opacity = 0;
       cursor = false;
     }else {
       document.getElementById('cursor').style.opacity = 1;
       cursor = true;
     }
   }, 300);
type();

    $(window).scroll(function(){
        const disfromtop = $(window).scrollTop()+1;
        const title = document.querySelector('.title');
        const titleimg = document.querySelector('.titleimg');
        // console.log(disfromtop);
        if(disfromtop >= 201){
            title.style.opacity = "0";
            titleimg.style.opacity = "1";
        }
        else if(disfromtop < 201){
            title.style.opacity = "1";
            titleimg.style.opacity = "0";
        }
    });
    $(window).scroll(function(){
        // console.log("yooooooooooooooooo"); 
        var disfromtop = $(window).scrollTop()+1; //how much scrolled from the top
        var distofintro  = $(".jumbotron").offset().top; //distance of intro from top
        var distofabout = $(".about").offset().top;
        var distofedu = $(".skills").offset().top;
        var heightofintro = $(".jumbotron").outerHeight();
        var heightofedu = $(".skills").outerHeight();
        var heightofabout = $(".about").outerHeight();
        var home = document.getElementById("linktojumbo");
        var about = document.getElementById("linktoabout");
        var education = document.getElementById("linktoskills");
        var contact = document.getElementById("linktocontact");
        if(disfromtop > 0){
            // console.log("okok");
             home.classList.add("active");
             about.classList.remove("active");
             contact.classList.remove("active");
             education.classList.remove("active");
        }
        if(disfromtop > distofintro+heightofintro/2){
             home.classList.remove("active");
             about.classList.add("active");
             contact.classList.remove("active");
             education.classList.remove("active");
        }
        if(disfromtop > distofabout+heightofabout/2){
             home.classList.remove("active");
             about.classList.remove("active");
             contact.classList.remove("active");
             education.classList.add("active");
        }
        if(disfromtop > distofedu+heightofedu/2){
             home.classList.remove("active");
             about.classList.remove("active");
             contact.classList.add("active");
             education.classList.remove("active");
        }
   
   });
});
    
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const title = document.querySelector('.title');
    burger.addEventListener('click',()=>{
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
    

}
navSlide();
