var game = document.querySelector('main');

let computerChoice = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let ties = 0;




document.onkeyup = function(event) {
    
    let userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (userGuess === "rock" || userGuess === "scissors" || userGuess === "paper") {

        if (userGuess === "rock" && computerGuess === "scissors"){
            wins++;
        }
        if (userGuess === "rock" && computerGuess === "paper") {
            losses++;
        }
        if (userGuess === "scissors" && computerGuess === "paper") {
            wins++;
        }
        if (userGuess === "scissors" && computerGuess === "rock") {
            losses++;
        }
        if (userGuess === "paper" && computerGuess === "rock") {
            wins++;
        }
        if (userGuess === "paper" && computerGuess === "scissors") {
            losses++;
        }
        if (userGuess === computerGuess) {
            ties++;
        }
       
       
    }
    else {
        document.getElementById("cantDoThat").innerHTML = (cantDoThat);
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
const cantDoThat = []
function incorrect() {
    document.getElementById("cantDoThat").innerHTML = (cantDoThat);
}
