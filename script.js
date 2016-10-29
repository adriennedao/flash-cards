//prompt the user for basic information
var question = prompt("Welcome, enter your name!");
var userAnswer = "name";
console.log(name);

var instruction = prompt("You may begin by clicking on the card next, click Ok!");
var userResponse = "click ok";

function myFunction() {
    document.getElementById("quiz").innerHTML = "July 14, 1789, the storming of Bastille Day";
}
//method returns the element that has the ID attribute with the specified value.
var card = document.getElementById('card');

//function for the card
card.addEventListener('click', function() {
    if (!this.classList.contains('on')) {
        this.classList.remove('off');
        this.classList.add('on');
    } else {
        this.classList.remove('on');
        this.classList.add('off');
    }
});
