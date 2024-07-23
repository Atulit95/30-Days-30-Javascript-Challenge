const Questions = [
    {
        question: "The King of jungle is:",
        answers:[
            {text: "Lion", correct: true},
            {text: "Tiger", correct: false},
            {text: "Elephant", correct: false},
            {text: "Rhino", correct: false},
        ]
    },
    {
        question: "Which is the largest dessert in the world?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Antartica", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
            {text: "Australia", correct: true},
        ]
    }
];

const questionElem = document.getElementById('question')
const answerElem = document.getElementById('ans-button')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetsState();
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElem.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerElem.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectanswer)
    });
}

function resetsState(){
    nextButton.style.display = "none"
    while(answerElem.firstChild){
        answerElem.removeChild(answerElem.firstChild)
    }
    
}


function selectanswer(e){
    const selectedBtn = e.target
    const iscorrect = selectedBtn.dataset.correct === 'true';
    if(iscorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerElem.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct")
        }
        button.disabled = 'true';
    })
    nextButton.style.display = 'block';
}

function showScore(){
    resetsState();
    questionElem.innerHTML = `You Scored ${score} out of ${Questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < Questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < Questions.length){
        showQuestion();
    }
    else{
        showScore()
    }
}

startQuiz()
