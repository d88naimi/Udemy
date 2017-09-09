console.log("Welcome david ");

// var num = -10;

// while(num <= 19){
//     console.log(num);
//     num ++;
// };

// console.log("-------------------------");

// var num = 10;

// while(num <= 40){
//     if(num % 2 ===0){
//     console.log(num);
//     }
//     num +=1;
//     console.log("second problem " + num);
// };

// console.log("-------------------------");

// var num = 300;

// while(num <= 333){
//     if( num % 2 !== 0){
//     console.log(num);
//     }
//     num +=1;
// };


// console.log("-------------------------");

// var num = 5;

// while(num <= 50){
//     if( num % 3 ===0 && num % 5 ===0){
//     console.log(num);
//     }
//     num +=1;
// };


// var answer = prompt("Are we there yet");

// while(answer.indexOf("yes") === -1){
//     var answer = prompt("Are we there yet????");
// }

// alert("mazel tov");

// if (answer === "yes"){
//     alert("mazel tov we made it");
// } else {
//     alert("not yet beotchhhh");
// }

// for (var i = -10; i <= 19; i++){
//     console.log(i);
// } 

// console.log("--------------------------------------------");
// for (var i = 10; i <= 40; i++){
//     if(i % 2 === 0)
//     console.log(i);
// } 

// console.log("--------------------------------------------");
// for (var i = 300; i <= 333; i++){
//     if((i % 2) !== 0)
//     console.log(i);
// } 

// console.log("--------------------------------------------");
// for (var i = 5; i <= 50; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//     console.log(i);
// } 
// }

// function square (num){
//     console.log(num* num);
// }
// function hello (name){
//     console.log("hello there  " + name );
// }


function isEven (num){
   return num % 2 === 0;
};


function isOdd (num){
   return num % 2 !==0;
};

function factorial(num){
    var val = 1;
for (var i = 2; i <=num; i++)
    val = val * i;
return val; 
};


function kebabCase(str) {
   
    var newResult = str.replace(/-/g, "_");
    return newResult;
  }
