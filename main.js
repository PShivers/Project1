
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
    //Category 1 Rick And Morty
    {
        id: "c1q1",
        question: "He wrote the unforgettable lyric \"She's a very kinky girl, the kind you don't take home to Mother\"",
        ans1: "Who is Rick James?",
        ans2: "What is a vocational school?",
        ans3: "What is a montesorri school?",
        rightAns: "ans1",
        amount: 200
    },
    {
        id: "c1q2",
        question: "In the late 1800s, an era of tycoons, Joy Morton acquired a company & became the big man in this home product.",
        ans1: "What is salt?",
        ans2: "What is pepper?",
        ans3: "What is Sweet-N-Low?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c1q3",
        question: "\"Guardian\" Rocket Raccoon is derisively called by the name of this mascot of the National Wildlife Federation.",
        ans1: "Who is Ricky Raccoon?",
        ans2: "Who is Mort the Turtle?",
        ans3: "Who is Ranger Rick?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c1q4",
        question: "John Mortimer's stories about this odd British defense lawyer \"of the Bailey\" were collected in \"Forever\" him.",
        ans1: "Who is Rumpole?",
        ans2: "",
        ans3: "",
        rightAns: "ans1",
        amount: 800
    },
    {
        id: "c1q5",
        question: "Part of the purpose driven life of this evangelical pastor was founding the Saddleback megachurch.",
        ans1: "Who is Mortimer Lang?",
        ans2: "Who is Rick Warren?",
        ans3: "Who is Richard Wayne Gary Wayne?",
        rightAns: "ans2",
        amount: 1000
    },
    //Category 2 Show me what you got
    {
        id: "c2q1",
        question: "Showing what you got on this device was expensive when it debuted in the '70s costing about $1,200.",
        ans1: "What is a VHS system?",
        ans2: "What is a LaserDisc player?",
        ans3: "What is a zoetrope?",
        rightAns: "ans1",
        amount: 200
    },
    {
        id: "c2q2",
        question: "You think you got the stones to play this sport? Well, if you have the granite type, you sure do.",
        ans1: "What is bocce ball",
        ans2: "What is curling?",
        ans3: "",
        rightAns: "ans2",
        amount: 400
    },
    {
        id: "c2q3",
        question: "This instrument has 7 main strings & 12 or more sympathetic ones.",
        ans1: "What is a lyre?",
        ans2: "What is a resonator?",
        ans3: "What is a sitar?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c2q4",
        question: "Your antipasto might combine pepperoni & these, also called Tuscan peppers.",
        ans1: "What are banana peppers?",
        ans2: "What are pepperoncinis?",
        ans3: "What are poblano peppers?",
        rightAns: "ans2",
        amount: 800
    },
    {
        id: "c2q5",
        question: "This type of sleeve shares its name with a type of swinging doors.",
        ans1: "What is draped?",
        ans2: "What is saloon?",
        ans3: "What is batwing?",
        rightAns: "ans3",
        amount: 1000
    },
    // Category 3 Keep summer safe
    {
        id: "c3q1",
        question: "It sounds like a swimming style, but this occurs when your body temperature rises to 104 degrees; be wary.",
        ans1: "",
        ans2: "",
        ans3: "What is heatstroke?",
        rightAns: "ans3",
        amount: 200
    },
    {
        id: "c3q2",
        question: "The CDC recommends 4-sided fencing around these to keep youngsters safe.",
        ans1: "What is a pool?",
        ans2: "What is a trampoline?",
        ans3: "What is ?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c3q3",
        question: "Swim parallel to the shore to reach safety if you encounter one of these swift-moving currents that can move at 8 feet per second.",
        ans1: "What is a riptide?",
        ans2: "",
        ans3: "",
        rightAns: "ans1",
        amount: 600
    },
    {
        id: "c3q4",
        question: "Products with this number at 30 block 97% of UVB rays, which is pretty darn good.",
        ans1: "What is ABV?",
        ans2: "",
        ans3: "What is SPF?",
        rightAns: "ans3",
        amount: 800
    },
    {
        id: "c3q5",
        question: "Kingsford specifies don't add this liquid, that they also make, to briquets that are already hot or burning.",
        ans1: "What is kerosene?",
        ans2: "What is lighter fluid?",
        ans3: "What is motor oil?",
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
//         $(".p1-score").html("$" + player1Score);f
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

    //now that modal is revealed and question/answers displayed
    $(".ansBtn").on('click', function () {
        questionCount--;
        console.log(questionCount);
        let selectedA = $(this).attr('class').split(' ')[1]
        //clear div of selectedQ
        //disable click function of selectedQ
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
            //pop up final question modal
            //check to see if final score is greater than zero
            console.log("all questions answered")
        }


    })


});

