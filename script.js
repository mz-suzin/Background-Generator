var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var text = document.querySelector('h3');
var body = document.getElementById('gradient');
var randButton = document.getElementById('rand-button');

// Set the color at the beginning
body.style.background = "linear-gradient(to right, " + 
	color1.value + 
	", " +
	color2.value + 
	")";
text.textContent = body.style.background + ";";

function changeColor() {
	body.style.background = 
	"linear-gradient(to right, " + 
	color1.value + 
	", " +
	color2.value + 
	")";

	text.textContent = body.style.background + ";";
}

function randomize() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
	changeColor();
}


color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
randButton.addEventListener("click", randomize);
