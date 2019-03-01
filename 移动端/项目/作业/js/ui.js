window.onload=function(){
    var header= document.querySelector("header");
    var squareBtn=document.querySelector(".headerbtn");
    var headerLayout=document.querySelector(".layout");
    console.log(headerLayout);
    headerLayout.style.top="-50vw";
    squareBtn.addEventListener("click",function(){
       
      
      if(headerLayout.style.top=="0vw")
      headerLayout.style.top="-50vw";
      else   headerLayout.style.top="0vw";
        
   },false);
    
}