var todos = ["feed dog"];

var input = prompt("what would you like to do?");

while(input !== "quit"){
    if( input === "list"){
        console.log(todos);

    } else if (input === "new"){
        var newTodo = prompt("What would you like to make NEW");
        todos.push(newTodo);
    }

    input = prompt("what else would you like to do?")
}
console.log("ok you quit the app");