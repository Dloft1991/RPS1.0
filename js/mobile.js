
//Mobile Version
var game = document.querySelector('main');


let winner = 0;
let loser = 0;
let tie = 0;

var picks = {
    rock: {
        name: "rock",
        value: "rock"
    },
    paper: {
        name: "paper",
        value: "paper"
    },
    scissors: {
        name: "scissors",
        value: "scissors"
    }
};

const rock = picks.rock.value;
const paper = picks.paper.value;
const scissors = picks.scissors.value;

$(".rock").on("click", function() {
    $("#userGuess").text(rock);
    console.log("userGuess: " + rock);
    opponentGuess();
    checkMatch();
});

$(".paper").on("click", function() {
    $("#userGuess").text(paper);
    console.log("userGuess: " + paper);
    opponentGuess();
    checkMatch();
});

$(".scissors").on("click", function() {
    $("#userGuess").text(scissors);
    console.log("userGuess: " + scissors);
    opponentGuess();
    checkMatch();
  
});



function opponentGuess () {

    let computerPick = ["rock", "paper", "scissors"];
    computerSelect = computerPick[Math.floor(Math.random() * computerPick.length)];

    $("#computerGuess").text(computerSelect);
    console.log(computerSelect);
    clearInterval();
}



function checkMatch () {
   
    if (picks.rock.value === "rock" || picks.rock.value === "scissors" || picks.rock.value === "paper") {

        if (picks.rock.value === "rock" && computerSelect === "scissors"){
            winner++;
        }
        if (picks.rock.value === "rock" && computerSelect === "paper") {
            loser++;
        }
        if (picks.rock.value === "scissors" && computerSelect === "paper") {
            winner++;
        }
        if (picks.rock.value === "scissors" && computerSelect === "rock") {
            loser++;
        }
        if (picks.rock.value === "paper" && computerSelect === "rock") {
            winner++;
        }
        if (picks.rock.value === "paper" && computerSelect === "scissors") {
            loser++;
        }
        if (picks.rock.value === computerSelect) {
            tie++;
        }

    $("#wins").text(winner);
    $("#losses").text(loser);
    $("#ties").text(tie);

    
};
};
