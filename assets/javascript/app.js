$(document).ready(function () {

  //hide reset button
  $("#reset-button").hide();

  //set interval countdown to new
  countDownDate = new Date();
  countDownDate.setSeconds(countDownDate.getSeconds() + (questions.length * 5));
  countDownDate = countDownDate.getTime();

  //call function display
  displayQuiz();

  // //submit button
  $("#submit-button").click(submit);

  //set timeout and call timeUp function
  timer = setTimeout(timeUp, (questions.length * 5000));

  intervalDisplay = setInterval(showInterval, 1000);

  //reset();
  $("#reset-button").click(reset);

});

//set variable for timeout
var timer;

//set variable for countdown to display 
var countDownDate = "";

//setInterval variable
var intervalDisplay;

//JSON object (questions, answers, value and details)
var questions = [
  {
    question: "Who is the oldest Kardashian sister?",
    answers: ["Kylie", "Kim", "Kourtney", "Khloe"],
    values: [false, false, true, false, false],
    detail: "Kourtney is the oldest Kardashian sister.",
  },
  {
    question: "What is the name of the clothing store Kim, Khloe, and Kourtney own?",
    answers: ["Dish", "Dash", "KKW", "Good American"],
    values: [false, true, false, false],
    detail: "Dash (stylized as DASH) was a boutique clothing and accessory chain founded in 2006 by the Kardashian sisters (Kourtney, Kim, and Khloé)",
  },
  {
    question: "What is Kim’s full name?",
    answers: ["Kimberly Kane Kardashian", "Kimberly Noel Kardashian", "Kimberly Kanye Kardashian", "Kimberly Kristen Kardashian"],
    values: [false, true, false, false],
    detail: "Kimberly Noel Kardashian West is an American media personality, businesswoman, socialite, model and actress. ",
  },
  {
    question: "The Kardashians are part American and part:",
    answers: ["Armenian", "Egyptian", "Hispanic", "Italian"],
    values: [true, false, false, false],
    detail: "Kardashians are part Armenian",

  },
  {
    question: "What was Robert Kardashian's (senior) profession?",
    answers: ["Doctor", "Lawyer", "Engineer", "Actor"],
    values: [false, true, false, false],
    detail: "Robert George Kardashian was an American attorney and businessman."
  }]

//define variables for correct answers, incorrect answers
var correct = 0;
var incorrect = 0;

//function displayQuiz
function displayQuiz() {

  //set a variable for <ul> to store html
  var content = "";

  //set variable for questionCount
  var questionCount = 0;

  //use forEach to display questions and options
  questions.forEach(function (quest) {
    console.log(content);
    questionCount++

    //open <ul> and append to declared variable
    content += "<ul>";

    //append h3 with id as q-'x' and text as question
    content += "<h3 id='q-" + questionCount + "'>" + quest.question + "</h3>";

    //open div tag and append to declared variable
    content += "<div>";

    //declare name for group of answers q-'x'-answer
    var groupName = "q-" + questionCount + "-answer";

    //use forloop to iterate through answers
    for (var i = 0; i < quest.answers.length; i++) {

      //create input radio with name for group and value = value[i]
      content += "<input class='correct-answer' type='radio' name='" + groupName + "' id='" + groupName + "-" + i + "' value='" + quest.values[i] + "' />";

      //create label with innertext = answer[i]
      content += "<label class='correct-answer' for='" + groupName + "-" + i + "'>" + quest.answers[i] + "</label>";
    }

    //close <div> and <ul>
    content += "</div>";
    content += "</ul>";


  })

  //set div innerhtlm+=variable for innerhtml
  $("#trivia-questions").html($("#trivia-questions").html() + content);
}


function reset() {
  correct = 0;
  incorrect = 0;
  $("#trivia-questions").html("");
  $(".display-time").html("");
  displayQuiz();
  timer = setTimeout(timeUp, (questions.length * 5000));
  countDownDate = new Date();
  countDownDate.setSeconds(countDownDate.getSeconds() + (questions.length * 5));
  countDownDate = countDownDate.getTime();
  intervalDisplay = setInterval(showInterval, 1000);
  $("#reset-button").hide();
  $("#submit-button").show();
}

//define function timeUP
function timeUp() {
  // display reset button
  $("#reset-button").show();
  //hide submit button
  $("#submit-button").hide();
  //call function calculate
  clearTimeout(timer);
  clearInterval(intervalDisplay);
  calculate();
  //display correct answers
  $("#trivia-questions").html("Correct Answers:" + "" + correct + "<br/>" + "Incorrect Answers:" + "" + incorrect);

  //display incorrect answers
  //*********************/DisplayQuiz(true);***********************show answers
}

function calculate() {
  var questionCount = 0;

  questions.forEach(function (quest) {
    questionCount++;

    //declare name for group of answers q-'x'-answer
    var groupName = "q-" + questionCount + "-answer";

    //calculate correct and incorrect answers
    var userAnswer = $("input[name='" + groupName + "']:checked").val();
    if (userAnswer == "true") {
      correct++
    } else {
      incorrect++
    }

  });
}

// //submit button
function submit() {
  timeUp();

}

//function for interval
function showInterval() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(minutes<10){
    minutes="0"+minutes;
  }
  if(seconds<10){
    seconds="0"+seconds;
  }

  // Output the result in an element with id="demo"
  $(".display-time").html(minutes + ":" + seconds + "");

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval();
    $(".display-time").html("Time's Up!");
  }
}



