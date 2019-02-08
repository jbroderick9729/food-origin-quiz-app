const QUESTIONS = [];
let viewHTML;

//supplies the html to render for a given view
function createViewHTML(view) {
    switch (view) {
        case "introView": 
            return viewHTML = 
                `<div class="introView">
                <h1>Welcome to the quiz</h1>
                <img src="" alt="silly image of food">
                <p>Here are the instructions for the quiz.</p>
                <button>Start</button>
            </div>`;
            break;
        case "questionView":
            return viewHTML =
            `<div class="questionView">
                <h1>Question 1 of 10</h1>
                <img src="" alt="image of first food">
                <form action="#" method="POST">
                <label for="q1">Question 1: Where is sushi from?</label><br/><br/>
                    <input type="radio" type="radio" value="Japan" name="q1">Japan</option><br/>
                    <input type="radio"value="Italy" name="q1">Italy</option><br/>
                    <input type="radio" value="USA" name="q1">USA</option><br/>
                    <input type="radio" value="Paraguay" name="q1">Paraguay</option><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>`;
        case "incorrectView":
            return viewHTML = 
            `<div class="incorrectView">
                <h1>Wrong!</h1>
                <img src="" alt="silly image of something sad">
                <p>The correct answer was Japan.</p>
                <p>Correct: 0</p>
                <p>Wrong: 1</p>
                <button>Next</button>
            </div>`;
            break;
        case "correctView":
            return viewHTML = 
            `<div class="correctView">
                <h1>Correct!</h1>
                <img src="" alt="silly image of something happy">
                <p>Sushi is from Japan.</p>
                <p>Correct: 1</p>
                <p>Wrong: 0</p>
                <button>Next</button>
            </div>`;
            break;
        case "endView": 
            return viewHTML =
                `<div class="endView">
                    <h1>Thanks for taking the quiz.</h1>
                    <img src="" alt="silly image of something triumphant">
                    <p>Score:</p>
                    <p>Correct: 0</p>
                    <p>Wrong: 10</p>
                    <button>Start over</button>
                </div>`;
                break;
        }
}
//loads the html for the view to the js-quiz div
function renderQuiz() {
    createViewHTML("incorrectView");
    $('.js-quiz').html(viewHTML);
}




$(renderQuiz);