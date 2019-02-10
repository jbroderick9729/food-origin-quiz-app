const STORE = {
        currentLocation: "introView",
        questionIndex: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        questions:  [
            {
            question: "Where does sushi come from?",
            answers: ["Japan", "Italy", "USA", "Paraguay"],
            correctAnswer: "Japan",
            src: "https://c-lj.gnst.jp/public/article/detail/a/00/01/a0001909/img/basic/a0001909_main.jpg?20180711132334",
            alt: "image of sushi"
            },
            {
                question: "",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "Where does Haggis (A combination of sheep organs, onions, and oatmeal cooked inside the sheep's stomach) originate from?",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "Where was the branded SPAM (Perportidly made from pork shoulder meat and potato starch) invented?",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "Where do Wasp Crackers (A wasp filled cookie) originate from?",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "Where is Fried Spider (Seasoned, fried, and served entirely intact) considered a delicacy?",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            },
            {
                question: "Where is Balut (A duck embryo. Prepared by boiling it alive in the shell) eaten?",
                answers: [],
                correctAnswer: " ",
                src: " ",
                alt: " "
            }
                
        ]};
   
function congrats() {
    let index = Math.floor(Math.random() * 4);
    let options = ["Congrats!", "Hurray!", "You did it!", "Kudos!"];
        return options[index];
}

function createViewHTML() {
    let questionIndex = STORE.questionIndex;
    let questionNumber = questionIndex + 1;
    let questionInfo = STORE.questions[questionIndex];
    
    switch (STORE.currentLocation) {
        case "introView": 
            return viewHTML = 
                `<div class="introView" id="js-begin">
                    <h1>Welcome to the quiz</h1>
                    <img src="http://2.bp.blogspot.com/-GYuyz0dENY8/U0aH8cEKBYI/AAAAAAAAACc/3MWXy4O5O7g/s1600/jpg.jpg" alt="image of a table of food dishes">
                    <p>Here are the instructions for the quiz.</p>
                    <button class="js-start-button">Start</button>
                </div>`;
                break;
        case "questionView":
            return viewHTML =
                `<div class="questionView" id='js-submit'>
                    <h1>Question ${questionNumber} of 10</h1>
                    <img src=${questionInfo.src} alt=${questionInfo.alt}>
                    <form>
                    <fieldset>
                    <legend for="q1">Question ${questionNumber}: ${questionInfo.question}</legend>
                        <div>
                            <input type="radio" id="${questionInfo.answers[0]}" value="${questionInfo.answers[0]}" name="q${questionNumber}">${questionInfo.answers[0]}
                            <label for="${questionInfo.answers[0]}">
                        </div>
                        <div>
                            <input type="radio" id="${questionInfo.answers[1]}" value="${questionInfo.answers[1]}" name="q${questionNumber}">${questionInfo.answers[1]}
                            <label for="${questionInfo.answers[1]}">
                        </div>
                        <div>
                            <input type="radio" id="${questionInfo.answers[2]}" value="${questionInfo.answers[2]}" name="q${questionNumber}">${questionInfo.answers[2]}
                            <label for="${questionInfo.answers[2]}">
                        </div>
                        <div>   
                            <input type="radio" id="${questionInfo.answers[3]}" value="${questionInfo.answers[3]}" name="q${questionNumber}">${questionInfo.answers[3]}
                            <label for="${questionInfo.answers[3]}">
                        </div>
                        <button type="submit" class="submit">Submit</button>
                    </fielset>
                    </form>
                </div>`
        case "incorrectView":
            return viewHTML = 
            `<div class="incorrectView">
                <h1>Wrong!</h1>
                <img src="https://c1.staticflickr.com/3/2589/3860162318_7ac34cf82d_b.jpg" alt="food the looks like a sad face">
                <p>The correct answer was ${questionInfo.correctAnswer}.</p>
                <p>Correct: ${STORE.totalCorrect}</p>
                <p>Wrong: ${STORE.totalIncorrect}</p>
                <button class="next">Next</button>
            </div>`;
            break;
        case "correctView":
            return viewHTML = 
                `<div class="correctView">
                    <h1>Correct!</h1>
                    <img src="https://memegenerator.net/img/instances/82030845/most-excellent.jpg" alt="bill and ted most excellent meme">
                    <p>${congrats()} That's correct.</p>
                    <p>Correct: ${STORE.totalCorrect}</p>
                    <p>Wrong: ${STORE.totalIncorrect}</p>
                    <button class="next">Next</button>
                </div>`;
                break;
        case "endView": 
            return viewHTML =
                `<div class="endView">
                    <h1>Thanks for taking the quiz.</h1>
                    <img src="https://i0.wp.com/anamicooks.com/wp-content/uploads/2017/11/international-foods-list.jpg?fit=1300%2C866&ssl=1" alt="popular foods of the world">
                    <p>Score:</p>
                    <p>Correct: ${STORE.totalCorrect}</p>
                    <p>Wrong: ${STORE.totalIncorrect}</p>
                    <button>Start over</button>
                </div>`;
                break;
        }
}

function startQuiz(){
    $('#js-begin').on('click', '.js-start-button', () => {
        STORE.currentLocation = 'questionView';
        renderQuiz();
    });
}

function handleSubmitAnswer(){
    let questionIndex = STORE.questionIndex;
    
    $('.js-quiz').on('click', '.submit', (event) => {
        event.preventDefault();
        let userAnswer = $('input:checked').val();
        let correctAnswer = STORE.questions[questionIndex].correctAnswer;
        if (userAnswer === correctAnswer){
            STORE.currentLocation = 'correctView';
            STORE.totalCorrect++;
        } else {
            STORE.currentLocation = 'incorrectView';
            STORE.totalIncorrect++;
        };
        renderQuiz();
    });
}

function handleNext() {   
    $('.js-quiz').on('click', '.next', () => {
        let length = STORE.questions.length - 1;        
        if (STORE.questionIndex < STORE.questions.length -1 ) {
            STORE.questionIndex++;
            STORE.currentLocation = "questionView";
        } else {
            STORE.currentLocation = "endView";
        }
        renderQuiz();
    })
}

// function handleCorrectAnswer
// 	Correct answer view
// 	Lightbulb turn on (maybe ding sound)
// 	If user is not on final question (next question)
// 	If user is on final question send user to End Game view(handleGameEnd)


// function handleIncorrectAnswer
// 	Incorrect Answer View
// 	Show user correct answer for the question from (handle submit answer function data)
// 	Maybe sound bite of Womp Womp Woooooomp
// 	If user is not on final question (next question)
// 	If user is on final question send user to End Game view(handleGameEnd)

// function handleGameEnd
// 	Show user End GAme View
// 	Show total score
// 	Show number of correct answers
// 	Show number of incorrect answers
//     Show number of unanswered questions...maybe?
    
    
// function resetData


function renderQuiz() {  
    let viewHTML = createViewHTML(STORE);
    $('.js-quiz').html(viewHTML);
}

function handleQuiz(){
    renderQuiz();
    startQuiz();
    handleSubmitAnswer(STORE);
    handleNext();
}

$(handleQuiz);
