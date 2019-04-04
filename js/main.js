var game = document.querySelector('main');

let computerChoice = ["r", "p", "s"];
let wins = 0;
let losses = 0;
let ties = 0;

var picks = {
    rock: {
        name: "rock",
        value: "r"
    },
    paper: {
        name: "paper",
        value: "p"
    },
    scissors: {
        name: "scissors",
        value: "s"
    }
};

document.onkeyup = function(event) {
    
    let userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (userGuess === "r" || userGuess === "s" || userGuess === "p") {

        if (userGuess === "r" && computerGuess === "s"){
            wins++;
        }
        if (userGuess === "r" && computerGuess === "p") {
            losses++;
        }
        if (userGuess === "s" && computerGuess === "p") {
            wins++;
        }
        if (userGuess === "s" && computerGuess === "r") {
            losses++;
        }
        if (userGuess === "p" && computerGuess === "r") {
            wins++;
        }
        if (userGuess === "p" && computerGuess === "s") {
            losses++;
        }
        if (userGuess === computerGuess) {
            ties++;
        }
       
       
    }
    else {
        incorrect();
        console.log(cantDoThat);
    }
    console.log("UserGuess: " + userGuess);
    console.log("ComputerGuess: " + computerGuess);
    document.getElementById("userGuess").innerHTML = (userGuess);
    document.getElementById("computerGuess").innerHTML = (computerGuess);
    document.getElementById("wins").innerHTML = (wins);
    document.getElementById("losses").innerHTML = (losses);
    document.getElementById("ties").innerHTML = (ties);
}
const cantDoThat = "You must only use 'r', 'p', or 's'. "
function incorrect() {
    document.getElementById("cantDoThat").innerHTML = (cantDoThat);
}

//Mobile Version

function checkMatch (picks){
    userGuess = picks.value;
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    $("#userGuess").text(userGuess);
    $("#computerGuess").text(computerGuess);

    chickenDinner();
}

let chickenDinner = function() {
    if (userGuess === "r" || userGuess === "s" || userGuess === "p") {

        if (userGuess === "r" && computerGuess === "s"){
            wins++;
        }
        if (userGuess === "r" && computerGuess === "p") {
            losses++;
        }
        if (userGuess === "s" && computerGuess === "p") {
            wins++;
        }
        if (userGuess === "s" && computerGuess === "r") {
            losses++;
        }
        if (userGuess === "p" && computerGuess === "r") {
            wins++;
        }
        if (userGuess === "p" && computerGuess === "s") {
            losses++;
        }
        if (userGuess === computerGuess) {
            ties++;
        }
       
       
    }
    else {
        incorrect();
        console.log(cantDoThat);
    }
    console.log("UserGuess: " + userGuess);
    console.log("ComputerGuess: " + computerGuess);
    document.getElementById("userGuess").innerHTML = (userGuess);
    document.getElementById("computerGuess").innerHTML = (computerGuess);
    document.getElementById("wins").innerHTML = (wins);
    document.getElementById("losses").innerHTML = (losses);
    document.getElementById("ties").innerHTML = (ties);
}
 



$(".rock").on("click", function() {
    checkMatch(picks.rock);
});

$(".paper").on("click", function() {
    checkMatch(picks.paper);
});

$(".scissors").on("click", function() {
    checkMatch(picks.scissors);
});

