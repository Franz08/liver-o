var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('quesiton');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q =  questions[quesitonIndex];
    questionEl.textContent = (questionIndex + 1)+ '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
};

function loadNextQuestion (){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score == 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion = totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuesitons){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);