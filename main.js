let qAndA = [
    {
        id: "c1q1",
        question: "what?",
        ans1: "chicken butt"
    },
    {
        id: "c1q2",
        question: "why?",
        ans1: "chicken thigh"
    }
]


$(function () {
    console.log("js + jquery linked");
    //clicking any question brings up modal
    $(".question").click(function () {
        //store value of div clicked in variable
        let selectedQ = $(this).attr('class').split(' ')[1]
        console.log(selectedQ);
        console.log(qAndA[0]);
        for (let i = 0; i < qAndA.length; i++) {
            if (selectedQ === qAndA[i].id) {
                console.log("matching")
                //then push items inside question[i] to modal
                // $(".currentQText").html()
            }
        }
        // let currentQuestion =
        $(".modalOverlay").show();
    });

    $(".ans1, .ans2, .ans3").click(function () {
        $(".modalOverlay").hide();
    });

});