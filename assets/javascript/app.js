$( document ).ready(function() {
    console.log( "ready!" );


//global vars
var correct = 0;
var incorrect = 0;
var time = 30;
var Q1 = $("#1-1").attr('value');
var Q2 = $("#Q2").val();
var Q3 = $("#Q3").val();


//function to count down from 60s

var x = setInterval(function() {
    time--
    $("#timer").html(time)
    if(time == 0){
        clearInterval(x);
        checkAnswers();
    }
}, 1000);

//when timer gets to 0 or button is clicked then timer stops and score is shown.




//check if answers are correct when time runs out or button is clicked
function checkAnswers(){
     if(Q1 == 1){
        correct++;
        console.log(correct);
    }
}

console.log(correct)

//display correct and incorrect

























});