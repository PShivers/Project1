let qAndA = [
    {
        id: "c1q1",
        question: "chicken butt",
        ans1: "what is guess what?",
        ans2: "what is guess why?",
        ans3: "what is guess how?"
    },
    {
        id: "c1q2",
        question: "why?",
        ans1: "chicken thigh"
    },
    {
        id: "c1q3",
        question: "?",
        ans1: "ifk",
        ans2: "sjf",
        ans3: "sdsfs"
    }
]


$(function () {
    console.log("js + jquery linked");
    //clicking any question brings up modal
    $(".question").click(function () {
        //store value of div clicked in variable
        let selectedQ = $(this).attr('class').split(' ')[1]
        console.log(selectedQ);
        for (let i = 0; i < qAndA.length; i++) {
            if (selectedQ === qAndA[i].id) {
                console.log("matching")
                //then push items inside question[i] to modal
                $(".currentQText").html(qAndA[i].question);
                $(".ans1").html(qAndA[i].ans1);
                $(".ans2").html(qAndA[i].ans2);
                $(".ans3").html(qAndA[i].ans3);
            }
        }
        // let currentQuestion =
        $(".modalOverlay").show();
    });

    $(".ans1, .ans2, .ans3").click(function () {
        $(".modalOverlay").hide();
    });

});