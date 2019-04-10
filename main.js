$(function () {
    console.log("js linked");

    $(".c1q1").click(function () {
        console.log("c1q1");
        $(".modal").show();
    });

    $(".ans1").click(function () {
        $(".modal").hide();
    });

});