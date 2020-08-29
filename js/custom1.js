$( document ).ready(function() {
    ele11 = document.getElementById("blog1");
ele11.addEventListener("mouseover",function(){
     console.log("csdcs");
    ele11.style.backgroundImage = "url('../pics/back.gif')" ;
 });
 ele11.addEventListener("mouseout",function(){
    console.log("csdcs");
   ele11.style.backgroundImage = "" ;
});
ele111 = document.getElementById("drop");
ele111.addEventListener("click",function(){
   document.getElementsByClassName("blog1content")[0].style.display = "inline";
   document.getElementById("up").style.display = "block";
   document.getElementById("drop").style.display = "none";
   console.log("fsfs");
//    ele11.style.backgroundImage = "" ;
});
ele112 = document.getElementById("up");
ele112.addEventListener("click",function(){
    document.getElementsByClassName("blog1content")[0].style.display = "none";
    document.getElementById("up").style.display = "none";
    document.getElementById("drop").style.display = "block";
    console.log("fsfs");
 //    ele11.style.backgroundImage = "" ;
 });
});
