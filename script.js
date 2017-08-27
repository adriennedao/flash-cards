//prompt the user for basic information
var question = prompt("Welcome, enter your name!");
var userAnswer = "name";
console.log(name);

var instruction = prompt("You may begin by clicking on the card next, click Ok!");
var userResponse = "click ok";

function myFunction() {
<<<<<<< HEAD
    document.getElementById("quiz").innerHTML = "Le Mont-Saint-Michel is an island commune in Normandy, France. Note: Flip the card";
}

//method returns the element that has the ID attribute with the specified value.
var card = document.getElementById('card');

=======
    document.getElementById("quiz").innerHTML = "July 14, 1789, the storming of Bastille Day";
}
//method returns the element that has the ID attribute with the specified value.
var card = document.getElementById('card');

>>>>>>> 045e8e07f65df12d63a785e8cf860afc98fec1b8
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
