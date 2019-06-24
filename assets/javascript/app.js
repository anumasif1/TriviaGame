$(document).ready(function () {

  //hide reset button
  $("#reset-button").hide();

  //call function display
  displayQuiz();


  // //submit button
  $("#submit-button").click(submit);

  //set timeout and call timeUp function
  timer = setTimeout(timeUp, 5000);

  //reset();
  $("#reset-button").click(reset);

});

 //set timeout and call timeUp function
 var timer;

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
  displayQuiz();
  timer = setTimeout(timeUp, 3000);
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



