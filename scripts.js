var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var outputDiv = document.getElementById('output');
var resultDiv = document.getElementById('result');

var paper = 1;
var rock = 2;
var scissors = 3;
var scoreUser = 0;
var scoreComputer = 0;


function printScore() 
{
    resultDiv.textContent = scoreUser + ' - ' + scoreComputer;
}

function playerMove(playerChoose) {
    var computerMove = randomComputerMove();
    
    if (playerChoose === paper) {
        if (computerMove === 1) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 2) {
            printOutput('user', playerChoose, computerMove);
            scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            scoreComputer++;
        }
            
    } else if (playerChoose === rock) {
        if (computerMove === 2) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 3) {
            printOutput('user', playerChoose, computerMove); 
            scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            scoreComputer++;
        }
    
    } else {
        if (computerMove === 3) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 1) {
            printOutput('user', playerChoose, computerMove); 
            scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            scoreComputer++;
        }
    }
    
    printScore();
};

function printOutput(winner, userMove, computerMove) {
    
    var text;
    
    if (winner === 'user') {
        text = 'YOU WON!'
    } else if (winner === 'computer') {
        text = "COMPUTER WON!"
    } else {
        text = "DRAW! ";
    }
    
    text += ' You played ';
    
    if (userMove === paper) {
        text += "PAPER";
    } else if (userMove === rock) {
        text += "ROCK";
    } else {
        text += "SCISSORS";
    }
    
    text += ', computer played ';
    
    if (computerMove === paper) {
        text += "PAPER";
    } else if (computerMove === rock) {
        text += "ROCK";
    } else {
        text += "SCISSORS";
    }
    
    outputDiv.textContent = text;
};

function randomComputerMove()
{
    var computerMove = Math.round(Math.random() * 2 + 1);
    return computerMove;
}

printScore();

paperButton.addEventListener('click', function()
{
    playerMove(paper);
});

rockButton.addEventListener('click', function()
{
    playerMove(rock);
});

scissorsButton.addEventListener('click', function()
{
    playerMove(scissors);
});

