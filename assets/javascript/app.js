//global vars
var correct = 0;
var incorrect = 0;
var time = 30;
var Q1;
var Q2;
var Q3;
var x;


$(document).ready(function () {
    console.log("ready!");
    
    //function to count down from 60s
function timer(){
    x = setInterval(function () {
        time--
        $("#timer").html(time)
        if (time == 0) {
            clearInterval(x);
            checkAnswers();
            console.log("Timer done")
        }
    }, 1000);
}
    //when timer gets to 0 or button is clicked then timer stops and score is shown.
    $("#submitButton").on("click", function(){
        
        checkAnswers();
    });



    //check if answers are correct when time runs out or button is clicked
    function checkAnswers(){
        clearInterval(x);
        Q1 = $("input[name='question1']:checked").val();
        Q2 = $("input[name='question2']:checked").val();
        Q3 = $("input[name='question3']:checked").val();
        $("#mainbody").hide();
        $("#secondbody").show();
    if(Q1 == "false"){
        correct++;
        console.log("yes" + correct);
    }
    else{
        incorrect++;
        console.log("no" + incorrect);
    }
    if(Q2 == "true"){
        correct++;
        console.log("yes" + correct);
    }
    else{
        incorrect++;
        console.log("no" + incorrect);
    }
    if(Q3 == "true"){
        correct++;
        console.log("yes" + correct);
    }
    else{
        incorrect++;
        console.log("no" + incorrect);
    }
    $("#right").text("Correct: "+correct);
    $("#wrong").text("Incorrect: "+incorrect);
    }

    //display correct and incorrect
$("#START").click(function(){
    timer();
    $("#mainbody").show();
    $("#timer").html("30");
    $("#START").hide();
});
});