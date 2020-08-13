$( document ).ready(function() {
var text = ["Hello Shaunak here","Keep dreaming, keep moving","No need to wait, it loops from here"];
var counter = 0;
var counter1 = 0;
var s=1;
var elem = document.getElementById("hey");
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

function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
   }

function borderApply(){
     var img = document.getElementById("mypic");
     var int1 = getRandomInt(256);
     var int2 = getRandomInt(256);
     var int3 = getRandomInt(256);
    img.style.border = "5px solid rgb("+int1+","+int2+","+int3+")";
    setTimeout(borderApply1,500);
}
function borderApply1(){
     var img = document.getElementById("mypic");
     var int1 = getRandomInt(256);
     var int2 = getRandomInt(256);
     var int3 = getRandomInt(256);
    img.style.border = "5px solid rgb("+int1+","+int2+","+int3+")";
    setTimeout(borderApply2,500);
}
function borderApply2(){
     var img = document.getElementById("mypic");
     var int1 = getRandomInt(256);
     var int2 = getRandomInt(256);
     var int3 = getRandomInt(256);
    img.style.border = "5px solid rgb("+int1+","+int2+","+int3+")";
    setTimeout(borderApply3,500);
}
function borderApply3(){
     var img = document.getElementById("mypic");
     var int1 = getRandomInt(256);
     var int2 = getRandomInt(256);
     var int3 = getRandomInt(256);
    img.style.border = "5px solid rgb("+int1+","+int2+","+int3+")";
    setTimeout(borderApply4,500);
}
function borderApply4(){
     var img = document.getElementById("mypic");
    img.style.border = "";
}
function display(elem){
     var ele = document.getElementById("lorem")
   if(s%2==0){
        ele.style.display = "none";
        elem.innerHTML = "{ Insert Lorem Ipsum to make this longer. }"
       s++;
   }
   else{
     ele.style.display = "block";
     elem.innerHTML = "{ Remove Lorem Ipsum to make this shorter. }"
     s++;
   }
}

$('body').scroll(function(){
     console.log("yooooooooooooooooo"); 
     var disfromtop = $(window).scrollTop()+1; //how much scrolled from the top
     var distofintro  = $(".introduction").offset().top; //distance of intro from top
     var distofabout = $(".about").offset().top;
     var distofedu = $(".education").offset().top;
     var home = document.getElementById("linktohome");
     var about = document.getElementById("linktoabout");
     var education = document.getElementById("linktoeducation");
     var contact = document.getElementById("linktocontact");
     if(disfromtop > 0){
          home.classList.add("active");
          about.classList.remove("active");
          contact.classList.remove("active");
          education.classList.remove("active");
     }
     if(disfromtop > distofintro+100){
          home.classList.remove("active");
          about.classList.add("active");
          contact.classList.remove("active");
          education.classList.remove("active");
     }
     if(disfromtop > distofabout+200){
          home.classList.remove("active");
          about.classList.remove("active");
          contact.classList.remove("active");
          education.classList.add("active");
     }
     if(disfromtop > distofedu+650){
          home.classList.remove("active");
          about.classList.remove("active");
          contact.classList.add("active");
          education.classList.remove("active");
     }

});
});