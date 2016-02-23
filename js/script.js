var carousel;
$(document).ready(function () {

    carousel = $("#frame ul");

    carousel.itemslide({
        one_item: true //Set this for proper full screen navigation
    }); //initialize itemslide

    $(window).resize(function () {
        carousel.reload();

    }); //Recalculate width and center positions and sizes when window is resized

    $(function () {
        $('#slickQuiz').slickQuiz();
    });
    $(".startQuiz").on('click', function () {
        $("#prequiz").hide();
    });
    $(".endQuiz").on('click', function () {
        location.reload();
    });

});