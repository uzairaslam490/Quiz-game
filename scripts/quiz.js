var questions =[{question: "Q: Which of the following is not a valid JavaScript variable name?",
    choices:['2names',' _first_and_last_names','FirstAndLast','None of the above'],
    correctAnswer: 0
},
{   question: "Q: What does the <noscript> tag do?",
    choices:['Enclose text to be displayed by non-JavaScript browsers.','Prevents scripts on the page from executing.'
    ,'Describes certain low-budget movies.','None of the above'],
    correctAnswer: 0
},{
    question: "Q: What is the correct JavaScript syntax to write Hello World ?",
    choices:['System.out.println("Hello World")','println ("Hello World")',
    'document.write("Hello World")','response.write("Hello World")'],
    correctAnswer: 2
},{
    question: "Q: Which of the following are capabilities of functions in JavaScript ?",
    choices:['Return a value','Accept parameters and Return a value',
    'Accept parameters','None of the above'],
    correctAnswer: 2
},{
    question: "Q: Which of the following best describes JavaScript?",
    choices:['a low-level programming language.','a scripting language precompiled in the browser.',
    'a compiled scripting language.','an object-oriented scripting language.'],
    correctAnswer: 3
},{
    question: "Q: Why so JavaScript and Java have similar name?",
    choices:['JavaScript is a stripped-down version of Java','JavaScript syntax is loosely based on Java',
    'They both originated on the island of Java','None of the above'],
    correctAnswer: 1
}];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
    
$(document).ready(function() {
    displayCurerntQuestion();
    $(this).find('.quizMessage').hide();
    $(this).find('.nextButton').on('click',function() {
        if(!quizOver) {
            value = $("input[type ='radio']:checked").val();
            if(val = undefined) {
                $(document).find(".card > .quizContainer > .card-text > .quizMessage").text('Please Select an Answer');
                $(document).find(".card > .quizContainer > .card-text > .quizMessage").show();
            } else {
                $(document).find('.quizContainer > .quizMessage').hide();
                if(value== questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length) {
                    displayCurerntQuestion();
                }
                else {
                    displayScore();
                    $(document).find('.nextButton').text('Play Again ?');
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find('.nextButton').text('Next Question');
            resetQuiz();
            displayCurerntQuestion();
            hideScore();
        }
    });
});

function displayCurerntQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find('.card > .quizContainer > .card-text > .question');
    var choiceList = $(document).find('.card > .quizContainer > .card-text > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find('li').remove();
    var choice;
    for(var i=0; i<numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li>'+
        '<div class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"'+
                    'style="background: transparent; border: transparent;" id="basic-addon1">'+
                    '<input type="radio" class="radio" name="dynradio" value="'+i+'" style="height: 17px; width: 17px;"></span>'+
                '</div>'+
                    '<h3 class="option" style="background: transparent;'+
                    'border: transparent; font-size: 25px; color: aqua; text-align: left; margin-left: 10px;'+
                    'margin-top: 5px;"'+
                    'aria-label="Username"'+
                    'aria-describedby="basic-addon1">'+choice+'</h3>'+
          '</div>'+
    '</li>').appendTo(choiceList);
    }
};

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find('.card > .quizContainer > .card-text > .result').text("You Scored: "+ correctAnswers +"  Out of : "+ questions.length);
    $(document).find('.card > .quizContainer > .card-text > .result').show();
}

function hideScore() {
    $(document).find('.card > .quizContainer > .card-text > .result').hide();
}
