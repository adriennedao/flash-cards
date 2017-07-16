//prompt the user for basic information
var question = prompt("Welcome, enter your name!");
var userAnswer = "name";
console.log(name);

var instruction = prompt("You may begin by clicking on the card");
var userResponse = "click ok";

function myFunction() {
    document.getElementById("quiz").innerHTML = "Le Mont-Saint-Michel is an island commune in Normandy, France. It is located about one kilometre off the country's northwestern coast, at the mouth of the Couesnon River near Avranches and is 100 hectares in size.";
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
