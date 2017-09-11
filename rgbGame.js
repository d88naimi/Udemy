console.log("LINKED!");

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
for( var i =0; i < squares.length; i++){
    //add intial colors to swuares
    squares[i].style.backgroundColor = colors[i];
    //add click lister to squares 
    squares[i].addEventListener("click", function(){
        //grabbed color clicked square
       var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            alert("chose the right box");
        } else {
            alert("nope");
        }
    });
}

