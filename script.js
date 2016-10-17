$(document).ready(function (){
  console.log("jquery is connected");
});

//Target button function
var button =$("button")
var handleClickEvent = function(){
  console.log("button")
}

//This is the event listener
button.on("click"), handleClickEvent);
console.log($(this))
