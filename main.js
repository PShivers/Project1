
let qAndA = [
    //Answers taken from http://www.j-archive.com/showgame.php?game_id=6040
    //Category 1 Rick And Morty
    {
        id: "c1q1",
        question: "He wrote the unforgettable lyric \"She's a very kinky girl, the kind you don't take home to Mother\"",
        ans1: "Who is Rick James?",
        ans2: "Who is James Brown?",
        ans3: "Who is Little Richard?",
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
        ans2: "Who is Sherlock?",
        ans3: "Who is Phineas?",
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
        ans1: "What is bocce ball?",
        ans2: "What is curling?",
        ans3: "What is rock, paper, scissors?",
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
        ans1: "What is doggy pants?",
        ans2: "What is water-back?",
        ans3: "What is heatstroke?",
        rightAns: "ans3",
        amount: 200
    },
    {
        id: "c3q2",
        question: "The CDC recommends 4-sided fencing around these to keep youngsters safe.",
        ans1: "What is a pool?",
        ans2: "What is a trampoline?",
        ans3: "What is a barbecue pit?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c3q3",
        question: "Swim parallel to the shore to reach safety if you encounter one of these swift-moving currents that can move at 8 feet per second.",
        ans1: "What is a riptide?",
        ans2: "What is a tidal wave?",
        ans3: "What is a dolphin current?",
        rightAns: "ans1",
        amount: 600
    },
    {
        id: "c3q4",
        question: "Products with this number at 30 block 97% of UVB rays, which is pretty darn good.",
        ans1: "What is ABV?",
        ans2: "What is CBD?",
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
    //cat 4 My man
    {
        id: "c4q1",
        question: "It's a 3-D representation of human form, dummy.",
        ans1: "What is a dummy",
        ans2: "What is a mannequin",
        ans3: "What is maniform",
        rightAns: "ans2",
        amount: 200
    },
    {
        id: "c4q2",
        question: "Hand shackles.",
        ans1: "What are manacles?",
        ans2: "What are handcuffs?",
        ans3: "What are mancuffs?",
        rightAns: "ans1",
        amount: 400
    },
    {
        id: "c4q3",
        question: "It's your destiny to know this 8-letter word means \"to show plainly\"",
        ans1: "What is manifest?",
        ans2: "What is manufacture?",
        ans3: "What is emancipate?",
        rightAns: "ans1",
        amount: 600
    },
    {
        id: "c4q4",
        question: "A royal command, or one from a superior court to a lower one.",
        ans1: "What is a permanent?",
        ans2: "What is a mandate?",
        ans3: "What is a management?",
        rightAns: "ans2",
        amount: 800
    },
    {
        id: "c4q5",
        question: "It conveys air & fuel from the carburetor to the cylinders.",
        ans1: "What is a manafort?",
        ans2: "What is a mandible?",
        ans3: "What is a manifold?",
        rightAns: "ans3",
        amount: 1000
    },
    //cat 5 You Pass Butter
    {
        id: "c5q1",
        question: "There's butter in this \"old fashioned\" Baskin-Robbins flavor as well as in its name.",
        ans1: "What is butter rum?",
        ans2: "What is butterscotch?",
        ans3: "What is butter pecan?",
        rightAns: "ans3",
        amount: 200
    },
    {
        id: "c5q2",
        question: "Sanford Redmond helped diners by automating the production of this unit of butter.",
        ans1: "What is a stick?",
        ans2: "What is a pat?",
        ans3: "What is a load?",
        rightAns: "ans2",
        amount: 400
    },
    {
        id: "c5q3",
        question: "Since 1911, the Iowa State Fair has featured one of these sculpted from 600 pounds of pure cream butter.",
        ans1: "What is a butter pig?",
        ans2: "What is a butter churn?",
        ans3: "What is a butter cow?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c5q4",
        question: "Da, Russian cookbook \"Please to the Table\" has recipe for this crispy chicken dish that squirts butter.",
        ans1: "What is chicken Kiev?",
        ans2: "What is Borscht?",
        ans3: "What is Solenya?",
        rightAns: "ans1",
        amount: 800
    },
    {
        id: "c5q5",
        question: "Sanskrit for \"to sprinkle\" gives us this word for a clarified butter.",
        ans1: "What is paneer?",
        ans2: "What is tallow?",
        ans3: "What is ghee?",
        rightAns: "ans3",
        amount: 1000
    },
    //cat 6
    {
        id: "c6q1",
        question: "In December 1848 President Polk gave Congress the news that \"the supply\" of this in California \"is very large\".",
        ans1: "What is raisins?",
        ans2: "What is gold?",
        ans3: "What is silver?",
        rightAns: "ans2",
        amount: 200
    },
    {
        id: "c6q2",
        question: "Founded by a Qatari emir, this news entity tried a U.S. version of its news channel from 2013 to 2016.",
        ans1: "What is The Jerusalem Post?",
        ans2: "What is Al Jazeera?",
        ans3: "What is Al Shabab?",
        rightAns: "ans2",
        amount: 400
    },
    {
        id: "c6q3",
        question: "One theory says this Virginia port got its name from an English captain who brought news to settlers at Jamestown.",
        ans1: "What is Infocove?",
        ans2: "What is Newstown?",
        ans3: "What is Newport News?",
        rightAns: "ans3",
        amount: 600
    },
    {
        id: "c6q4",
        question: "This Hungarian-born physicist later regretted the sexism in his telegram \"it's a boy\" when an H-bomb test worked.",
        ans1: "Who is Edward Teller?",
        ans2: "Who is Robert Oppenheimer?",
        ans3: "Who is Enrico Fermi?",
        rightAns: "ans1",
        amount: 800
    },
    {
        id: "c6q5",
        question: "He ran the original marathon, bringing Athens news of the battle.",
        ans1: "Who is Pheidippides?",
        ans2: "Who is Hermes?",
        ans3: "Who is Hephaistos?",
        rightAns: "ans1",
        amount: 1000
    },


    // {
    //     id: "",
    //     question: "Mark Twain referred to her as the little lady who started the Civil War.",
    //     ans1: "",
    //     ans2: "",
    //     ans3: "Who is Harriet Beecher Stowe",
    //     rightAns: "ans3",
    //     amount: 5000
    // },
    //Category 4 - 
];

let fJExplanation = "Final Question! This question is worth $4000 points. <br> In order to win you must have a positive amount of money, so choose wisely.";
let finalQ = "Her 1896 New York Times obituary called her \"the writer of probably the most widely read work of fiction ever penned\".";
let questionCount = 30;
let player1Score = 0;
let player2Score = 0;
let rightAns;
let selectedQ;
let currentQObj;
let selectedA;
let newScore;
let clearClass;
let spentQuestions = ['hi'];
let populateQModal = function () {
    for (let i = 0; i < qAndA.length; i++) {
        if (selectedQ === qAndA[i].id) {
            //populate modal with object[i] values
            $(".currentQText").html(qAndA[i].question);
            $(".ans1").html(qAndA[i].ans1);
            $(".ans2").html(qAndA[i].ans2);
            $(".ans3").html(qAndA[i].ans3);
            rightAns = qAndA[i].rightAns;
            currentQObj = qAndA[i]
        } $(".modal-overlay").css("display", "flex");
    };
};
let checkScore = function () {
    if (player1Score < 0) {
        $(".player1").css("background", "#EB3333");
    } else {
        $(".player1").css("background", "url(\"images/blank_jeopardy_screen_by_drewmandew_dcwx9jx-pre.jpg\")");
    }
};
let calculateScore = function () {
    if (selectedA === rightAns) {
        alert("correct!");
        //add selectedQ value to player score
        player1Score = player1Score + currentQObj.amount;
        checkScore();
        $(".p1-score").html("$" + player1Score);
        $(".modal-overlay").hide();
    } else {
        alert("Wrong Answer");
        player1Score = player1Score - currentQObj.amount;
        checkScore();
        $(".p1-score").html("$" + player1Score)
        $(".modal-overlay").hide();
    }
};
let populateFinalQ = function () {
    //pop up final question modal
    $(".final-modal").css("display", "flex");
    //load final jep data
    $(".fj-explanation").html(fJExplanation);
    $(".final-question").html(finalQ);
    $(".response1").html("Who is Jane Austen?");
    $(".response2").html("Who is Louisa May Alcott?");
    $(".response3").html("Who is Harriet Beecher Stowe?");
    rightAns = "f-ans3";
};
let winOrLose = function () {
    if (player1Score > 0) {
        $(".win-or-lose").html("You win! Good Job!");
        $(".final-score-number").html("$" + player1Score)
        $(".results-modal").css("display", "flex")
    } else {
        $(".win-or-lose").html("You Lose... better luck next time!");
        $(".final-score-number").html("$" + player1Score)
        $(".results-modal").css("display", "flex")
    }
};

//start jQuery
$(function () {
    $(".p1-score").html("$" + player1Score);
    $(".p2-score").html("$" + player2Score);

    $(".start-btn").click(function () {
        $(".start-modal").hide();
    });


    //clicking any question brings up modal
    $(".question").click(function () {
        //store unique id class of div clicked in variable
        selectedQ = $(this).attr('class').split(' ')[1];
        //clear click and hover functionality
        $(this).html("");
        $(this).off('click');
        $(this).removeClass("hover");
        populateQModal();
    });
    //on answering
    $(".ans-btn").on('click', function () {
        questionCount--;
        if (questionCount === 28) {
            populateFinalQ();
            // //pop up final question modal
            // $(".final-modal").css("display", "flex");
            // //load final jep data
            // $(".fj-explanation").html(fJExplanation);
            // $(".final-question").html(finalQ);
            // $(".response1").html("Who is Jane Austen?");
            // $(".response2").html("Who is Louisa May Alcott?");
            // $(".response3").html("Who is Harriet Beecher Stowe?");
            // rightAns = "f-ans3";
            $(".f-ans-btn").on('click', function () {
                selectedA = $(this).attr('class').split(' ')[1]
                if (selectedA === rightAns) {
                    player1Score = player1Score + 4000;
                    checkScore();
                    $(".p1-score").html("$" + player1Score);
                } else {
                    player1Score = player1Score - 4000;
                    checkScore();
                    $(".p1-score").html("$" + player1Score)
                    if (player1Score > 0) {
                        alert("oooopps");
                    }
                }
                winOrLose();
                // if (player1Score > 0) {
                //     $(".win-or-lose").html("You win! Good Job!");
                //     $(".final-score-number").html("$" + player1Score)
                //     $(".results-modal").css("display", "flex")
                // } else {
                //     $(".win-or-lose").html("You Lose... better luck next time!");
                //     $(".final-score-number").html("$" + player1Score)
                //     $(".results-modal").css("display", "flex")
                // }
            })
            //check to see if final score is greater than zero
        } else {
            //get unique id of ans-btn pressed
            selectedA = $(this).attr('class').split(' ')[1]
            // calculateScore();
            if (selectedA === rightAns) {
                Swal.fire({
                    title: 'Correct!',
                    background: "#4EC13E",
                    timer: 1000,
                    showConfirmButton: false
                });
                // alert("correct!");
                //add selectedQ value to player score
                player1Score = player1Score + currentQObj.amount;
                checkScore();
                $(".p1-score").html("$" + player1Score);
                $(".modal-overlay").hide();
            } else {
                Swal.fire({
                    title: "Incorrect!",
                    background: "#EB3333",
                    timer: 1000,
                    showConfirmButton: false
                });
                player1Score = player1Score - currentQObj.amount;
                checkScore();
                $(".p1-score").html("$" + player1Score)
                $(".modal-overlay").hide();
            }
        }
    });

    $(".rules").click(function () {
        $(".rules-wrapper").css("display", "flex");
    });

    $(".go-back").click(function () {
        $(".rules-wrapper").css("display", "none");
    });

    $(".play-again").click(function () {
        location.reload();
    });
    $(".")
});
//end jQuery