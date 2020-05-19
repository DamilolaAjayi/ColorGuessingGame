var noSquares = 6;
var colors = generateRandomColor(noSquares);
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');

var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');


var resetButton = document.querySelector('div button');
var modeButtons = document.querySelectorAll('.mode');
colorDisplay.textContent = pickedColor;

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for( var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? noSquares = 3 : noSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < colors.length; i++){
    
        squares[i].addEventListener("click", (e)=>{
            var clickedColor = e.target.style.background;
           
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Play Again?"
            }
            else{
                e.target.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener('click', function(){
    reset();
})

function reset(){
    colors = generateRandomColor(noSquares);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";

    for( var i = 0; i < squares.length; i++){
       if(colors[i]){ 
           squares[i].style.background = colors[i];
           squares[i].style.display = "block";       }
       else{
           squares[i].style.display = "none";
       }
    }

    h1.style.background = "steelblue";
}
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){

    var arr = [];
    for( var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor (){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}