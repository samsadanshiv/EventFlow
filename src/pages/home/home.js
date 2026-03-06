document.querySelector(".primary-btn").addEventListener("click", function(){
alert("Explore Events Clicked!");
});

document.querySelector(".secondary-btn").addEventListener("click", function(){
alert("Create Event Clicked!");
});


const cards = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const position = card.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 50){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});



const dashboard = document.querySelector(".dashboard");

dashboard.addEventListener("mousemove",(e)=>{

let x = e.offsetX;
let y = e.offsetY;

let rotateX = -(y - 200) / 20;
let rotateY = (x - 200) / 20;

dashboard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

dashboard.addEventListener("mouseleave",()=>{

dashboard.style.transform = "rotateX(0) rotateY(0)";

});


new QRCode(document.getElementById("qrcode"), {
text: "EventFlow Ticket | TechSummit 2026 | Seat 342",
width: 80,
height: 80
});
