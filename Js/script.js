let scrollContainer=document.querySelector(".gellary");
let backBtn=document.getElementById("backbtn");
let nextBtn=document.getElementById("nextbtn");
scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";

});
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=900;
    scrollContainer.style.scrollBehavior="smooth";
});