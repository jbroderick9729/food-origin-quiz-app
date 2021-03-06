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
            alt: "An image of sushi."
            },
            {
            question: "Where does haggis (a combination of sheep organs, onions, and oatmeal cooked inside the sheep's stomach) originate from?",
            answers: ["Guatamala", "China", "Bangladesh", "Scotland"],
            correctAnswer: "Scotland",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Scotland_Haggis.jpg/1200px-Scotland_Haggis.jpg",
            alt: "An image of Haggis wrapped up in plastic for sale."
            },
            {
            question: "Where was the branded SPAM (purportedly made from pork shoulder meat and potato starch) invented?",
            answers: ["Russia", "Australia", "USA", "China"],
            correctAnswer: "USA",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Spam_can.png/948px-Spam_can.png",
            alt: "An image of classic canned spam."
            },
            {
            question: "Where do Wasp Crackers (wasp filled cookies) originate from?",
            answers: ["Poland", "Germany", "Japan", "Lithuania"],
            correctAnswer: "Japan",
            src: "https://sabotagetimes.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_482/MTI5NDg0MDc2NTAyNTk5Njkw/pastedgraphic-9.webp",
            alt: "Four cookies with wasp pieces throughout."
            },
            {
            question: "Where is Fried Spider (seasoned, fried, and served entirely intact) considered a delicacy?",
            answers: ["Cambodia", "South Korea", "Greenland", "Norway"],
            correctAnswer: "Cambodia",
            src: "https://s21103.pcdn.co/wp-content/uploads/2014/04/P2022689.jpg.webp",
            alt: "A large metal bowl filled with a mountain of black fried spiders."
            },
            {
            question: "Where is Balut (a duck embryo, prepared by boiling it alive in the shell) eaten?",
            answers: ["Africa", "Philippines", "United Kingdom", "New Zealand"],
            correctAnswer: "Philippines",
            src: "https://c1.staticflickr.com/3/2808/9103467843_2b39b27373_b.jpg",
            alt: "Visbilly developed duck embryo inside of the shell it was boiled in."
            },
            {
            question: "Where is Jellied Moose Nose (boiled and spiced then covered in a jelly broth) eaten?",
            answers: ["USA", "Canada", "Italy", "Sweden"],
            correctAnswer: "Canada",
            src: "https://coxrare.files.wordpress.com/2018/07/jellied-moose-nose.png?w=1024&h=535&crop=1",
            alt: "Two blocks of Jellied Moose Nose"
            },
            {
            question: "Where in the world is Huitlacoche (also known as Sleeping Excrement) eaten?",
            answers: ["Spain", "Mexico", "Egypt", "Iceland"],
            correctAnswer: "Mexico",
            src: "http://4.bp.blogspot.com/-G22EVuXrgsM/TnbYPV9OAGI/AAAAAAAAA48/sSrLziX3S8A/s1600/huitlacoche2.jpg",
            alt: "Corn covered in a fungus called corn smut."
            },
            {
            question: "Where is Lutefisk (a delicacy made from aged stockfish and lye) consumed?",
            answers: ["France", "Norway", "Laos", "Argentina"],
            correctAnswer: "Norway",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ForkLutefisk.jpg/749px-ForkLutefisk.jpg",
            alt: "A transclucent jellyfied aged fish."
            },    
            {
            question: "Where is a delicacy known as Finanziera (a sauce made with a combination of combs, wattles, and veal brains) eaten?",
            answers: ["USA", "Mexico", "France", "Italy"],
            correctAnswer: "Italy",
            src: "https://instagram.fagc1-1.fna.fbcdn.net/vp/b49f4ebbbb167fff62cdd34797a2f242/5CDEBD39/t51.2885-15/sh0.08/e35/s640x640/31425115_187061881941544_2907563245868941312_n.jpg?_nc_ht=instagram.fagc1-1.fna.fbcdn.net",
            alt: "Plate of stewed meat."
             }, 
        ]
};
   
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
                    <h1>Welcome to the Foods of the World quiz.</h1>
                    <img src="http://2.bp.blogspot.com/-GYuyz0dENY8/U0aH8cEKBYI/AAAAAAAAACc/3MWXy4O5O7g/s1600/jpg.jpg" alt="image of a table of food dishes">
                    <p>Take the quiz by clicking the Start button below. The quiz is 10 questions long. Enjoy!</p>
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

                        <label><input type="radio" id="${questionInfo.answers[0]}" value="${questionInfo.answers[0]}" name="q${questionNumber}" checked/>${questionInfo.answers[0]} </label>
                        <label><input type="radio" id="${questionInfo.answers[1]}" value="${questionInfo.answers[1]}" name="q${questionNumber}" />${questionInfo.answers[1]} </label>
                        <label><input type="radio" id="${questionInfo.answers[2]}" value="${questionInfo.answers[2]}" name="q${questionNumber}" />${questionInfo.answers[2]} </label>
                        <label><input type="radio" id="${questionInfo.answers[3]}" value="${questionInfo.answers[3]}" name="q${questionNumber}" />${questionInfo.answers[3]} </label>
                        <button type="submit" class="submit">Submit</button>
                    </fielset>
                    </form>
                </div>`
        case "incorrectView":
            return viewHTML = 
            `<div class="incorrectView">
                <h1>That's wrong.</h1>
                <img src="https://c1.staticflickr.com/3/2589/3860162318_7ac34cf82d_b.jpg" alt="food the looks like a sad face">
                <p>The correct answer was ${questionInfo.correctAnswer}.</p>
                <p>Here's your current score:</p>
                <p><span class="right">Correct: ${STORE.totalCorrect}</span> | <span class="wrong">Wrong: ${STORE.totalIncorrect}</span></p>
                <button class="next">Next</button>
            </div>`;
            break;
        case "correctView":
            return viewHTML = 
                `<div class="correctView">
                    <h1>Correct!</h1>
                    <img src="https://memegenerator.net/img/instances/82030845/most-excellent.jpg" alt="bill and ted most excellent meme">
                    <p>${congrats()} That's correct.</p>
                    <p>Here's your current score:</p>
                    <p><span class="right">Correct: ${STORE.totalCorrect}</span> | <span class="wrong">Wrong: ${STORE.totalIncorrect}</span></p>
                    <button class="next">Next</button>
                </div>`;
                break;
        case "endView": 
            return viewHTML =
                `<div class="endView">
                    <h1>Thanks for taking the Foods of the World quiz.</h1>
                    <img src="https://i0.wp.com/anamicooks.com/wp-content/uploads/2017/11/international-foods-list.jpg?fit=1300%2C866&ssl=1" alt="popular foods of the world">
                    <h1>Final Score:</h1>
                    <p><span class="right">Correct: ${STORE.totalCorrect}</span> | <span class="wrong">Wrong: ${STORE.totalIncorrect}</span></p>
                    <p>Want to try again? Click the button below.</p>
                    <button class="startOver">Start over</button>
                </div>`;
                break;
        }
}

function startQuiz(){
    $('.js-quiz').on('click', '.js-start-button', () => {
        STORE.currentLocation = 'questionView';
        renderQuiz();
    });
}

function handleSubmitAnswer(){

    $('.js-quiz').on('click', '.submit', (event) => {
        let questionIndex = STORE.questionIndex;
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
        if (STORE.questionIndex < length ) {
            STORE.questionIndex++;
            STORE.currentLocation = "questionView";
        } else {
            STORE.currentLocation = "endView";
        }
        renderQuiz();
    });
}

function handleStartOver() {
    $('.js-quiz').on('click', '.startOver', () => {
        STORE.currentLocation = 'introView';
        STORE.questionIndex = 0;
        STORE.totalCorrect = 0;
        STORE.totalIncorrect = 0;
        renderQuiz();   
    });
};

function renderQuiz() {  
    let viewHTML = createViewHTML(STORE);
    $('.js-quiz').html(viewHTML);
}

function handleQuiz(){
    renderQuiz();
    startQuiz();
    handleSubmitAnswer();
    handleNext();
    handleStartOver(); 
}

$(handleQuiz);
