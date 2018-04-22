
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#band #reset");
var modeButtons = document.querySelectorAll(".mode");
var RGBHTML = document.querySelector("h1 span");
var h1 = document.querySelector("h1");
var messageHTML = document.querySelector("#message");

var isOver;
var colors;
var pickedColor;
var numOfColors = 6;

initialize();

function initialize(){

	reset();

	resetButton.addEventListener("click", function(){
		reset();
	});

	setupModeButtons();
	setupSquares();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numOfColors = 3: numOfColors = 6;
			reset();
			for(var i = 0; i < squares.length; i++){
				if(colors[i]) squares[i].style.display = "block";
				else squares[i].style.display = "none";
			}
		});
	}
}

function setupSquares(){
	for (var i = 0; i<numOfColors; i++){
		squares[i].addEventListener("click", function(){
			if(!isOver){
				console.log(pickedColor, this.style.backgroundColor)
				if(this.style.backgroundColor === pickedColor)
				{
					changeColor(pickedColor);
					messageHTML.textContent = "Correct!";
					h1.style.backgroundColor = pickedColor;
					resetButton.textContent = "PLAY AGAIN";
				}
				else {
					this.style.backgroundColor = "#232323";
					messageHTML.textContent = "Try Again";
				}
			}
		});
	}
}

function reset(){
	isOver = false;
	colors = generateRandomColors(numOfColors);
	pickedColor = pickColor(numOfColors);
	RGBHTML.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++)
		squares[i].style.backgroundColor = colors[i];

	messageHTML.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLOR";
}

function generateRandomColors(numOfColors){
	var arr = [] ;
	for (var i = 0; i<numOfColors; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(numOfColors){
	return colors[Math.floor(Math.random() * numOfColors)];
}

function changeColor(color){
	for(var j = 0; j<numOfColors; j++)
		squares[j].style.backgroundColor = color;
}