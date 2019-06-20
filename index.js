$(function() {
    $('.startButton').click(event => {
        event.preventDefault();
        $('.quizIntro').css('display', 'none');
        $('.quizQuestion').css('display', 'block');
        $('.quizHeader').html(
            '<div class="progressBar"><div class="currentProgress"></div></div>\
            <h3>Score 1/10</h3>'
        );
        $('.quizQuestion').html(
            '<h2>Question</h2>\
            <form class="questionForm">\
            <label class="container"><input type=\
            "radio" name="answer"> One</label><label class="container"><input type=\
            "radio" name="answer"> Two</label><label \
            class="container"><input type="radio" name="answer">\
            Three</label><label class="container"><input\
            type="radio" name="answer"> Four</label>\
            <button type="submit" class="submit">Submit</button>\
            </form>'
        );     
    });

    $('.quizQuestion').on('click', '.submit', event => {
        event.preventDefault();
        $('.quizQuestion').css('display', 'none');
        $('.quizResponse').css('display', 'flex');
        $('.quizResponse').html('<h2>Correct!</h2><p>Some text here</p>\
        <button class="next">Next</button>');

    });
});