//prompt the user for basic information
var question = prompt("Welcome, enter your name!");
var userAnswer = "name";
console.log(name);


function myFunction() {
    document.getElementById("quiz").innerHTML = "Le Mont-Saint-Michel is an island commune in Normandy, France. Note: Flip the card";
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
