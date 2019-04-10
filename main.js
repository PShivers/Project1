$(function () {
    console.log("js linked");

    //event listener that on click sends element to variable and then sends variable to function to display modal

    //clicking any question brings up modal
    $(".question").click(function () {
        //store value of div clicked in variable
        let currentQuestion = $(this).attr('class').split(' ')[1];
        console.log(currentQuestion);
        // let currentQuestion =
        $(".modalOverlay").show();
    });

    $(".ans1, .ans2, .ans3").click(function () {
        $(".modalOverlay").hide();
    });

});