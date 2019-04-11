let qAndA = [
    {
        id: "c1q1",
        question: "It's a public school offering special instruction that's designed to \"attract\" a diverse student body",
        ans1: "What is a magnet school?",
        ans2: "What is a vocational school?",
        ans3: "What is a montesorri school?",
        rightAns: "ans1",
        amount: 200
    },
    {
        id: "c1q2",
        question: "From a word for \"seed\", it's a college that prepares students to be priests, ministers or rabbis",
        ans1: "What is a synagogue?",
        ans2: "What is a seminary?",
        ans3: "What is a vestiary?",
        rightAns: "ans2",
        amount: 400
    },
    {
        id: "c1q3",
        question: "?",
        ans1: "ifk",
        ans2: "sjf",
        ans3: "sdsfs",
        rightAns: "ans1",
        amount: 600
    }
]

let player1Score = 0;
let player2Score = 0;
let rightAns;
let selectedQ;
let currentQObj;
let selectedA;
let newScore;

// let calculateScore = function () {
//     if (selectedA === rightAns) {
//         console.log("correct!")
//         console.log(currentQObj.amount)
//         //add selectedQ value to player score
//         newScore = player1Score + currentQObj.amount;
//         player1Score = newScore;
//     }
// }

//start jQuery
$(function () {
    console.log("js + jquery linked");
    $(".p1-score").html("$" + player1Score);
    $(".p2-score").html("$" + player2Score);

    //clicking any question brings up modal
    $(".question").click(function () {
        //clear point value from div
        $(this).html("");
        //clear click and hover functionality

        //store value of div clicked in variable
        selectedQ = $(this).attr('class').split(' ')[1]
        console.log(selectedQ);
        //propagate object values into modal
        for (let i = 0; i < qAndA.length; i++) {
            if (selectedQ === qAndA[i].id) {
                // console.log("matching")
                //then push items inside question[i] to modal
                $(".currentQText").html(qAndA[i].question);
                $(".ans1").html(qAndA[i].ans1);
                $(".ans2").html(qAndA[i].ans2);
                $(".ans3").html(qAndA[i].ans3);
                rightAns = qAndA[i].rightAns;
                currentQObj = qAndA[i]
            }

        }
        //start timer

        //show modal containing question and answer options pulled from corresponding object
        $(".modalOverlay").show();

        //get unique id of ansBtn pressed (may need to be above in for or if loop)
        $(".ansBtn").click(function () {
            let selectedA = $(this).attr('class').split(' ')[1]
            console.log(selectedA);
            console.log(rightAns);
            if (selectedA === rightAns) {
                console.log("correct!")
                console.log("quesition value is " + currentQObj.amount)
                //add selectedQ value to player score
                player1Score += currentQObj.amount;
                console.log("player1Score is " + player1Score)
                $(".p1-score").html("$" + player1Score)
            }
            //clear div of selectedQ

            //disable click function of selectedQ
        })

    })

    $(".ans1, .ans2, .ans3").click(function () {
        $(".modalOverlay").hide();
    });

});