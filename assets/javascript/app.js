//document.ready
$(document).ready(function(){

//Array of objects (Trivia Questions, Choices, Values, Detail)
var questions = [
    {
    question: "Who is the oldest Kardashian sister?",
    answers: ["Kylie", "Kim", "Kourtney", "Khloe", "Kendel"],
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
    answers: ["Doctor","Lawyer", "Engineer", "Actor"],
    values: [false, true, false, false],
    detail: "Robert George Kardashian was an American attorney and businessman."
  }]
  
 



//Set variables for currentQuestion, Correct, Incorrect.

//for each loop to console.log objects in same order.
//declare a variable to store innerhtml
var content= "";
var questionCount=0;
//declare a count variable
questions.forEach(function(quest) {
    console.log(content);
    questionCount++;
    //open ul tag and append to declared variable
    content+="<ul>";

   //yucontent = $("<ul>").append("Question: "+quest.question);
   console.log(content)
    //append h3 with id as q-'x' and text as question
    content+="<h3 id='q-"+questionCount+"'>"+quest.question+"</h3>";
    //open div tag and append to declared variable
    content+="<div>";

    //declare name for group of answers q-'x'-answer
    var groupName="q-"+questionCount+"-answer";
    //iterate through answers/values
    //(for (i=0;...obj.length;i++))
    for(var i=0;i<quest.answers.length;i++){        
        //create input radio with name for group and value = value[i]
        //<input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" name="q1" />
        content+="<input type='radio' name='"+groupName+"' id='"+groupName+"-"+i+"' value='"+quest.values[i]+"'  />";
        //<label for="question-1-answers-A">A) Kim </label>
        //create label with innertext = answer[i]
        content+="<label for='"+groupName+"-"+i+"'> "+quest.answers[i]+"</label>";
    }
    //close div tag append
    content+="</div>";
    //close ul tag append
    content+="</ul>";


    console.log("Question: "+quest.question); 
    console.log('Answers:');
    var answerNumber=0;
    quest.answers.forEach(function(answer){
        answerNumber++;
        console.log("Answer "+answerNumber+": "+answer);
    });

    console.log('Values:');
    var valueNumber=0;
    quest.values.forEach(function(value){
        valueNumber++;
        console.log("Value "+valueNumber+": "+value);
    });

    console.log("Detail: "+quest.detail);
        //console.log(JSON.stringify(questions,null,4));

})
console.log(content);
//set div innerhtlm+=variable for innerhtml
$("#trivia-questions").html($("#trivia-questions").html()+content);

//--------------------------------------------------------------------------------

//Submit button
$("form").submit(function(){
    alert("Submitted");
  });

})

//define function timeUP
    //setTimeOut 30000
    //questions removed
    //display timeUp
    //display correct answers
    //display incorrect answers
    //Reset Button
