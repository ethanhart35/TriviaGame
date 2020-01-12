$( document ).ready(function() {
    console.log( "ready!" );


//global vars
var correct = 0;
var incorrect = 0;
var time = 30;


//function to count down from 60s

var x = setInterval(function() {
    time--
    $("#timer").html(time)
    if(time < 1){
        clearInterval(x)
    }
}, 1000);

//check if answers are correct when time runs out or button is clicked



//when timer gets to 0 or button is clicked then timer stops and score is shown.



























});