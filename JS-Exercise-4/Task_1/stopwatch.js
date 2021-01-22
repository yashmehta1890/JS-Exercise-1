//Start Current Date and Time
function displayCurrentDateTime() {
	let myTime = setTimeout('currentDateTime()',1000);	
}
function currentDateTime() {
	let current_time = new Date();
	document.getElementById("currentTime").value = "Time  : " + current_time.toLocaleTimeString();	
	displayCurrentDateTime();
}
displayCurrentDateTime();
let current_datetime = new Date();
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let current_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();

document.getElementById("currentDate").value = "Date  :  " + current_date;

//End Current Date and Time

//Start StopWatch
let ms=0,s=0,m=0,h=0;
let timer;

let stopWatchEl = document.getElementById("stopWatchTime");
document.getElementById("stop").disabled = true;
document.getElementById("resume").disabled = true;
document.getElementById("reset").disabled = true;

// start Button function
function start() {
	if(!timer){
		timer = setInterval(run,10);
		document.getElementById("start").disabled = true;
		document.getElementById("stop").disabled = false;
		document.getElementById("reset").disabled = false;	
	}	
}
// End start Button function

// start run Button function
function run() {
	stopWatchEl.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
	ms++;
	if(ms==100){
		ms=0;
		s++;
	}
	if(s==60){
		s=0;
		m++;
	}
	if(m==60){
		m=0;
		h++;
	}
}
// End run Button function

// start stop Button function
function stop() {
	clearInterval(timer);
	timer = false;
	document.getElementById("resume").disabled = false;
}
// End stop Button function

// start resume Button function
function resume() {
	if(!timer){
		timer = setInterval(run,10);
		document.getElementById("resume").disabled = true;	
	}
}
// End resume Button function

// start reset Button function
function reset() {
	clearInterval(timer);
	timer = false;
	h=0;
	m=0;
	s=0;
	ms=0;
	stopWatchEl.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);	
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;
	document.getElementById("reset").disabled = true;
	document.getElementById("resume").disabled = true;	
}
// End reset Button function
//End StopWatch
