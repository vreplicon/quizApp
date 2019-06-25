let qNum = 0;
let score = 0;


function handleStartButton() {
    $('.quizIntro').on('click', '.startButton', event => {
        loadHeader(); 
        loadQuestion();
    });
}


function loadHeader() {
    $('.quizHeader').css('display', 'flex');
    $('.quizHeader').html(
        `<h3>Progress: ${qNum}/10</h3>\
        <h3>Score: ${score}/10</h3>`
    );
}

function loadQuestion() {

    $('.quizIntro').css('display', 'none');
    $('.quizQuestion').css('display', 'block');


    $('.quizQuestion').html(
        `<h2>${QNA[qNum].q}</h2>\
        <form class="questionForm">\
        <label class="container">${QNA[qNum].a1}<input type=\
        "radio" name="answer" value=1></label><label class="container">${QNA[qNum].a2}<input type=\
        "radio" name="answer" value=2></label><label \
        class="container">${QNA[qNum].a3}<input type="radio" name="answer" value=3>\
        </label><label class="container">${QNA[qNum].a4}<input\
        type="radio" name="answer" value=4></label>\
        <button type="submit" class="submit">Submit</button>\
        </form>`
    );
}

function handleSubmitButton() {
    $('.quizQuestion').on('click', '.submit', event => {

        event.preventDefault();
        $('.quizQuestion').css('display', 'none');
        $('.quizResponse').css('display', 'flex');
        
        if (answerCorrect()) {
            score++;
            $('.quizResponse').html(`<h2>Correct!</h2><p>${QNA[qNum].note}</p>\
            <button class="next">Next</button>`);
        } else {
            $('.quizResponse').html(`<h2>Incorrect</h2><p>${QNA[qNum].note}</p>\
            <button class="next">Next</button>`);
        }

        qNum++;
        loadHeader();

    });
}

function answerCorrect() {
    let selected = $('input:checked').val();
    if (selected == QNA[qNum].ans) {
        return true;
    } else {
        return false;
    }
}

function handleNextButton() {
    $('.quizResponse').on('click', '.next', event => {
        $('.quizResponse').css('display', 'none');
        
        if (qNum < 2) {
            loadQuestion();
        } else {
            loadEnd();
        }
    });
}

function loadEnd() {
    $('.quizEnd').css('display', 'flex');
    $('.quizEnd').html(
        `<h2>${getRespone()}</h2>\
        <p>You got ${score} out of 10 questions right.</p>\
        <p>Would you like to try again?</p>\
        <button class="restart">Restart</button>`
    );
}

function getRespone() {
    if (score < 4) {
        return ENDRESPONSE.bad;
    } else if (score < 8) {
        return ENDRESPONSE.okay
    } else {
        return ENDRESPONSE.best;
    }
}

function handleRestart() {
    $('.quizEnd').on('click', '.restart', event => {
        $('.quizEnd').css('display', 'none');
        $('.quizHeader').css('display', 'none');
        qNum = 0;
        score = 0;
        $('.quizIntro').css('display', 'flex');
    });
}

function handleAnswerButtons() {
    $('.quizQuestion').on('change', 'label', event => {
        $('label').removeClass('js-checked');
        $('input:checked').closest('label').toggleClass('js-checked');

    });
}

$(function() {

    handleStartButton();
    handleNextButton();
    handleSubmitButton();
    handleRestart();
    handleAnswerButtons();

});