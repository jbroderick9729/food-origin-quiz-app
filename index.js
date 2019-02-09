$( () => {console.log("im connected")});

//Data Store
const STORE = [{
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
},
]






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












//Quiz functions
function renderQuiz(){
    render();
    handleSubmitAnswer();

    renderNextQuestion();
}

$(renderQuiz);