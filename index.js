let qNum = 0;
let score = 0;

function loadQuestion() {

    $('.quizIntro').css('display', 'none');
    $('.quizQuestion').css('display', 'block');


    $('.quizQuestion').html(
        `<h2>${QNA[qNum].q}</h2>\
        <form class="questionForm">\
        <label class="container"><input type=\
        "radio" name="answer" value=1>${QNA[qNum].a1}</label><label class="container"><input type=\
        "radio" name="answer" value=2>${QNA[qNum].a2}</label><label \
        class="container"><input type="radio" name="answer" value=3>\
        ${QNA[qNum].a3}</label><label class="container"><input\
        type="radio" name="answer" value=4>${QNA[qNum].a4}</label>\
        <button type="submit" class="submit">Submit</button>\
        </form>`
    );
}


function loadHeader() {
    $('.quizHeader').css('display', 'flex');
    $('.quizHeader').html(
        `<div class="progressBar"><div class="currentProgress"></div></div>\
        <h3>Score ${score}/10</h3>`
    );
}

function isCorrect() {
    let selected = $('input:checked').val();
    if (selected == QNA[qNum].ans) {
        return true;
    } else {
        return false;
    }

}

function loadEnd() {
    $('.quizEnd').css('display', 'flex');
    $('.quizEnd').html(
        '<p>This is the end of the quiz. Would you like to try again?</p>\
        <button class="restart">Restart</button>'
    );
}

$(function() {
    $('.quizIntro').on('click', '.startButton', event => {
        event.preventDefault();
        $('.quizIntro').css('display', 'none');
        $('.quizQuestion').css('display', 'block');
        loadQuestion();
        loadHeader();
             
    });

    $('.quizQuestion').on('click', '.submit', event => {
        if (qNum < 2) {
            event.preventDefault();
            isCorrect();
            $('.quizQuestion').css('display', 'none');
            $('.quizResponse').css('display', 'flex');
            if (isCorrect()) {
                score++;
                loadHeader();
                $('.quizResponse').html(`<h2>Correct!</h2><p>${QNA[qNum].note}</p>\
                <button class="next">Next</button>`);
            } else {
                $('.quizResponse').html(`<h2>Incorrect</h2><p>${QNA[qNum].note}</p>\
                <button class="next">Next</button>`);
            }
            qNum++;
        } else {
            
        }
    });

    $('.quizResponse').on('click', '.next', event => {
        $('.quizResponse').css('display', 'none');
        
        if (qNum < 2) {
            loadQuestion();
        } else {
            loadEnd();
        }
    });

    $('.quizEnd').on('click', '.restart', event => {
        $('.quizEnd').css('display', 'none');
        $('.quizHeader').css('display', 'none');
        qNum = 0;
        score = 0;
        $('.quizIntro').css('display', 'flex');
    });
});