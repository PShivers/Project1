let qAndA = [
    {
        id: "c1q1",
        question: "chicken butt",
        ans1: "what is guess what?",
        ans2: "what is guess why?",
        ans3: "what is guess how?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c1q2",
        question: "why?",
        ans1: "chicken thigh",
        ans2: "",
        ans3: "",
        value: 400
    },
    {
        id: "c1q3",
        question: "?",
        ans1: "ifk",
        ans2: "sjf",
        ans3: "sdsfs",
        value: 600
    }
]

let player1Score = ("$" + 0);
let player2Score = ("$" + 0);



$(function () {
    console.log("js + jquery linked");
    $(".p1Score").html(player1Score);
    $(".p2Score").html(player2Score);

    //clicking any question brings up modal
    $(".question").click(function () {
        //store value of div clicked in variable
        let selectedQ = $(this).attr('class').split(' ')[1]
        console.log(selectedQ);
        //propagate object values into modal
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
        //start timer
        $(".modalOverlay").show();
        $(".ansBtn").click(function () {
            let selectedA = $(this).attr('class').split(' ')[1]
            console.log(selectedA);
        })
    });

    $(".ans1, .ans2, .ans3").click(function () {
        $(".modalOverlay").hide();
    });

});