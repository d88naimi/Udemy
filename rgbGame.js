console.log("LINKED!");

// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

var numberSquares = 6;

var colors = generateRandomColors(numberSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberSquares = 3;
    colors = generateRandomColors(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
   }
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberSquares = 6;
    colors = generateRandomColors( numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    
   }
});

//reset function button here 
resetButton.addEventListener("click", function(){
   // generate new colors
   colors = generateRandomColors( numberSquares);
   // pick a new random color from array
   pickedColor = pickColor();
// change colorDisplay to match new picked color
colorDisplay.textContent = pickedColor;
   //change colors of sqaures
   messageDisplay.textContent = "";
   for(var i = 0; i< squares.length; i++){
       squares[i].style.backgroundColor = colors[i]; 
   }
h1.style.backgroundColor ="#232323";
})


for( var i =0; i < squares.length; i++){
    //add intial colors to swuares
    squares[i].style.backgroundColor = colors[i];
    //add click lister to squares 
    squares[i].addEventListener("click", function(){
        //grabbed color clicked square
       var clickedColor = this.style.backgroundColor;
       console.log("-------" + clickedColor , pickedColor);
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color){
    // loop through all squares
for(var i =0; squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make am array
    var arr = []
    // repeat num times
    for(var i = 0; i< num; i++){
        arr.push(randomColor())
    // get random color and push into arr
    
    }
    // return array
    return arr;

    function randomColor(){
        // pick a red from 0-255
        var r = Math.floor(Math.random() * 256);
        // pick green 0-255
        var g = Math.floor(Math.random() * 256);
        //pick a blue from 0 - 255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}