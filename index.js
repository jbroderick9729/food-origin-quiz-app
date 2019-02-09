const STORE = {
        currentLocation: "questionView",
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
            },
            {
                question: "",
            },
            {
                question: "",
            },
            {
                question: "",
            },
            {
                question: "",
            },
            {
                question: "Where does Haggis (A combination of sheep organs, onions, and oatmeal cooked inside the sheep's stomach) originate from?",
            },
            {
                question: "Where was the branded SPAM (Perportidly made from pork shoulder meat and potato starch) invented?",
            },
            {
                question: "Where do Wasp Crackers (A wasp filled cookie) originate from?",
            },
            {
                question: "Where is Fried Spider (Seasoned, fried, and served entirely intact) considered a delicacy?",
            },
            {
                question: "Where is Balut (A duck embryo. Prepared by boiling it alive in the shell) eaten?",
            }
                
        ]};
   
//update to randomly determine which to say: congrats, hurray, you did it, kudos
function congrats() {
    return 'Congrats!';
}

//supplies the html to render for a given view, passing in the STORE and QUESTIONS
function createViewHTML(status) {
    //index of question in QUESTIONS
    let questionIndex = status.questionIndex;
    // +1 because the Q #1 is at the 0 index in the array
    let questionNumber = questionIndex + 1;
    //gets the object for the question so we can just access its properties
    let questionInfo = status.questions[questionIndex];
    
    switch (status.currentLocation) {
        case "introView": 
            return viewHTML = 
                `<div class="introView">
                    <h1>Welcome to the quiz</h1>
                    <img src="http://2.bp.blogspot.com/-GYuyz0dENY8/U0aH8cEKBYI/AAAAAAAAACc/3MWXy4O5O7g/s1600/jpg.jpg" alt="image of a table of food dishes">
                    <p>Here are the instructions for the quiz.</p>
                    <button>Start</button>
                </div>`;
                break;
        case "questionView":
            return viewHTML =
                `<div class="questionView">
                    <h1>Question ${questionNumber} of 10</h1>
                    <img src=${questionInfo.src} alt=${questionInfo.alt}>
                    <form action="#" method="POST">
                    <label for="q1">Question ${questionNumber}: ${questionInfo.question}</label><br/><br/>
                        <input type="radio" value="${questionInfo.answers[0]}" name="q1">${questionInfo.answers[0]}</option><br/>
                        <input type="radio" value="${questionInfo.answers[1]}" name="q1">${questionInfo.answers[1]}</option><br/>
                        <input type="radio" value="${questionInfo.answers[2]}" name="q1">${questionInfo.answers[2]}</option><br/>
                        <input type="radio" value="${questionInfo.answers[3]}" name="q1">${questionInfo.answers[3]}</option><br/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>`;
        case "incorrectView":
            return viewHTML = 
            `<div class="incorrectView">
                <h1>Wrong!</h1>
                <img src="https://c1.staticflickr.com/3/2589/3860162318_7ac34cf82d_b.jpg" alt="food the looks like a sad face">
                <p>The correct answer was ${questionInfo.correctAnswer}.</p>
                <p>Correct: ${status.totalCorrect}</p>
                <p>Wrong: ${status.totalIncorrect}</p>
                <button>Next</button>
            </div>`;
            break;
        case "correctView":
            return viewHTML = 
                `<div class="correctView">
                    <h1>Correct!</h1>
                    <img src="https://memegenerator.net/img/instances/82030845/most-excellent.jpg" alt="bill and ted most excellent meme">
                    <p>${congrats()}! That's correct.</p>
                    <p>Correct: ${status.totalCorrect}</p>
                    <p>Wrong: ${status.totalIncorrect}</p>
                    <button>Next</button>
                </div>`;
                break;
        case "endView": 
            return viewHTML =
                `<div class="endView">
                    <h1>Thanks for taking the quiz.</h1>
                    <img src="https://i0.wp.com/anamicooks.com/wp-content/uploads/2017/11/international-foods-list.jpg?fit=1300%2C866&ssl=1" alt="popular foods of the world">
                    <p>Score:</p>
                    <p>Correct: ${status.totalCorrect}</p>
                    <p>Wrong: ${status.totalIncorrect}</p>
                    <button>Start over</button>
                </div>`;
                break;
        }
}



/*function render
// User can start the quiz and is taken to question 1
// From correct view or incorrect view, user can go to next question
// After the final question user is taken to the end view


function handleSubmitAnswer
	user clicks submit button
	Stop normal submit behavior
	Compare question answer to user data
	If question and answer match (handleCorrectAnswer)
	else (handleIncorrectAnswer)


function handleCorrectAnswer
	Correct answer view
	Lightbulb turn on (maybe ding sound)
	If user is not on final question (next question)
	If user is on final question send user to End Game view(handleGameEnd)



function handleIncorrectAnswer
	Incorrect Answer View
	Show user correct answer for the question from (handle submit answer function data)
	Maybe sound bite of Womp Womp Woooooomp
	If user is not on final question (next question)
	If user is on final question send user to End Game view(handleGameEnd)


function handleGameEnd
	Show user End GAme View
	Show total score
	Show number of correct answers
	Show number of incorrect answers
    Show number of unanswered questions...maybe?
    
    
function resetData
*/

//loads the html for the view to the js-quiz div
function renderQuiz() {  
    //gets which view to show, fills in dynamic info
    let viewHTML = createViewHTML(STORE);
    //renders that html to the page
    $('.js-quiz').html(viewHTML);
}

$(renderQuiz);
