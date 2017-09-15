// check off li 

// $("li").click(function(){
//   $(this).css("color", "gray")
//   $(this).css("text-decoration", "line-through");
// });

// or make it a object
// if li is grey 

// turn is black

// else
//turn it gray
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


// click on X to delete todo
// "event" allows to do a specific action on the current "this" 
$("ul").on( "click", "span", function(event) {
    // "this" refers to the span on the parent object it fades out the whole "li"
    $(this).parent().fadeOut(1000, function(){
        // "this" fade of the li "
        $(this).remove();
    });
    // similiar to returning false but stops all parents elements
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if( event.which === 13) {
        //grabbing new todo text 
       var todoText = $(this).val();
       // create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>" );
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();

});