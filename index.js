$(function() {
    $('.startButton').click(event => {
        event.preventDefault();
        $('.quizIntro').css('display', 'none');
        $('.quizQuestion').css('display', 'block');
        $('.quizHeader').html(
            '<div class="progressBar"><div class="currentProgress"></div></div>\
            '
        );
        $('.quizQuestion').html(
            '<h2>Question</h2>\
            <form class="questionForm">\
            <label class="container"><input type=\
            "radio">One</label><label class="container"><input type=\
            "radio">Two</label><label \
            class="container"><input type="radio">\
            Three</label><label class="container"><input\
            type="radio">Four</label>\
            <input type="submit" class="submit" value="Submit">\
            </form>'
        );     
    });

    $('.quizQuestion').on('click', '.submit', event => {
        event.preventDefault();
        $('.quizQuestion').css('display', 'none');

    });
});