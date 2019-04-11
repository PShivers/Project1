
// {
//     id: "",
//     question: "",
//     ans1: "",
//     ans2: "",
//     ans3: "",
//     rightAns: "",
//     amount: 0
// },

let qAndA = [
    //Category 1 Get an Education
    {
        id: "c1q1",
        question: "It's a public school offering special instruction that's designed to \"attract\" a diverse student body.",
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
        question: "Influenced by Friedrich Froebel, in 1873 Susan Blow founded America's first public one of these for little kids in St. Louis.",
        ans1: "",
        ans2: "",
        ans3: "What is a kindergarten?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c1q4",
        question: "In France, ecole is \"school\" & this is the word for a secondary school.",
        ans1: "What is a lycée?",
        ans2: "",
        ans3: "",
        rightAns: "ans1",
        amount: 800
    },
    {
        id: "c1q5",
        question: "In the painting \"The School of Athens\", these two great teachers are the center of attention.",
        ans1: "",
        ans2: "Who are Plato and Aristotle?",
        ans3: "",
        rightAns: "ans2",
        amount: 1000
    },
    //Category 2 Queen Sized
    {
        id: "c2q1",
        question: "Queen Maria II of this country was born in Brazil in 1819.",
        ans1: "What is Portugal",
        ans2: "",
        ans3: "",
        rightAns: "ans1",
        amount: 200
    },
    {
        id: "c2q2",
        question: "The second Spanish queen of the name, she had a troubled reign, ending in her overthrow in 1868.",
        ans1: "",
        ans2: "Who is Isabella?",
        ans3: "",
        rightAns: "ans2",
        amount: 400
    },
    {
        id: "c2q3",
        question: "As queen of Egypt in the 1300s B.C., she played a prominent role in the cult of the sun god Aton",
        ans1: "",
        ans2: "",
        ans3: "Who is Nefertiti?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c2q4",
        question: "The 18th century war of this \"Succession\" helped keep Maria Theresa as ruler but cost her Silesia",
        ans1: "",
        ans2: "What is the War of the Austrian Succession?",
        ans3: "",
        rightAns: "ans2",
        amount: 800
    },
    {
        id: "c2q5",
        question: "Queen of the Iceni tribe, she led a British revolt vs. the Romans that saw her defeated in 60 A.D.",
        ans1: "",
        ans2: "",
        ans3: "Who is Boudicea",
        rightAns: "ans3",
        amount: 1000
    },
    // Category 3 ALL IN A DAY'S WORK
    {
        id: "c3q1",
        question: "First thing, this daily trip to the ol' salt mine, averaging about 30 minutes each way in the L.A. area.",
        ans1: "",
        ans2: "",
        ans3: "What is a commute?",
        rightAns: "ans3",
        amount: 200
    },
    {
        id: "c3q2",
        question: "Midmorning, a break for this beverage said to have been discovered by a 9th century goat herder.",
        ans1: "What is coffee?",
        ans2: "What is tea?",
        ans3: "What is kombucha?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c3q3",
        question: "Uh oh! A visit from HR, this department.",
        ans1: "What is human resources?",
        ans2: "",
        ans3: "",
        rightAns: "ans1",
        amount: 600
    },
    {
        id: "c3q4",
        question: "Let's get out of here before the boss asks us to work this, exemptions from which are listed in the FLSA.",
        ans1: "",
        ans2: "",
        ans3: "What is overtime?",
        rightAns: "ans3",
        amount: 800
    },
    {
        id: "c3q5",
        question: "An 8-hour day & I made 40 buttons, so divide output by input to get this measure, 5 per hour",
        ans1: "",
        ans2: "What is productivity?",
        ans3: "",
        rightAns: "ans2",
        amount: 1000
    },
    //Category 4 - 
];

let questionCount = 30;
let player1Score = 0;
let player2Score = 0;
let rightAns;
let selectedQ;
let currentQObj;
let selectedA;
let newScore;
let clearClass;

// let calculateScore = function () {
//     if (selectedA === rightAns) {
//         console.log("correct!");
//         alert("Correct Answer");
//         console.log("quesition value is " + currentQObj.amount);
//         //add selectedQ value to player score
//         player1Score = player1Score + currentQObj.amount;
//         console.log("player1Score is " + player1Score);
//         $(".p1-score").html("$" + player1Score);
//         $(".modalOverlay").hide();
//     } else {
//         console.log("wrong answer");
//         alert("Wrong Answer");
//         player1Score = player1Score - currentQObj.amount;
//         $(".p1-score").html("$" + player1Score)
//         $(".modalOverlay").hide();
//     }
// };



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

        //store unique id class of div clicked in variable
        selectedQ = $(this).attr('class').split(' ')[1];
        clearClass = $(this).attr('class').split(' ')[0];
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


    })

    $(".ansBtn").on('click', function () {
        questionCount--;
        console.log(questionCount);
        let selectedA = $(this).attr('class').split(' ')[1]
        $(".question").addClass("done");
        console.log(selectedA);
        console.log(rightAns);
        // calculateScore();
        if (selectedA === rightAns) {
            console.log("correct!");
            alert("Correct Answer");
            console.log("quesition value is " + currentQObj.amount);
            //add selectedQ value to player score
            player1Score = player1Score + currentQObj.amount;
            console.log("player1Score is " + player1Score);
            $(".p1-score").html("$" + player1Score);
            $(".modalOverlay").hide();
        } else {
            console.log("wrong answer");
            alert("Wrong Answer");
            player1Score = player1Score - currentQObj.amount;
            $(".p1-score").html("$" + player1Score)
            $(".modalOverlay").hide();
        }
        //final jeopardy prompt
        if (questionCount === 0) {
            console.log("all questions answered")
        }

        //clear div of selectedQ

        //disable click function of selectedQ
    })
    //now that modal is revealed and question/answers displayed


});

