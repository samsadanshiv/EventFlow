/* SHOW CREATE EVENT FORM */
function showCreateEvent(){
document.getElementById("createEventSection").classList.add("show");
}

/* HIDE CREATE EVENT FORM */
function hideCreateEvent(){
document.getElementById("createEventSection").classList.remove("show");
}


/* BAR CHART */

const barChart = new Chart(
document.getElementById('barChart'),
{
type:'bar',

data:{
labels:['Tech','Cultural','HackNight','Sports','Leadership'],

datasets:[
{
label:'Registered',
data:[350,850,180,600,100],
backgroundColor:'#7C3AED'
},

{
label:'Capacity',
data:[500,1000,300,800,150],
backgroundColor:'#1E3A8A'
}
]
},

options:{
responsive:true
}

}
);


/* PIE CHART */

const pieChart = new Chart(
document.getElementById('pieChart'),
{
type:'pie',

data:{
labels:['Tech','Cultural','Sports'],

datasets:[
{
data:[50,33,17],
backgroundColor:[
'#1E3A8A',
'#7C3AED',
'#10b981'
]
}
]
}

}
);