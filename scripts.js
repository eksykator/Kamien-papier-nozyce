var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var outputDiv = document.getElementById('output');
var resultDiv = document.getElementById('result');
var newGameButton = document.getElementById('new-game-button');
var numberOfRoundsDiv = document.getElementById('number-of-rounds');
var infoDiv = document.getElementById('info');

var paper = 1;
var rock = 2;
var scissors = 3;
var scoreUser = 0;
var scoreComputer = 0;
var numberOfRounds;
var numberOfFinishedRounds = 0;


function printNumberOfRounds() 
{
    var text = ', number of rounds to win: ';
    if (numberOfRounds % 2 === 0) {
        text += numberOfRounds/2 + 1;
    } else {
        text += Math.ceil(numberOfRounds/2);
    }
    
    numberOfRoundsDiv.textContent = 'Number of rounds: ' + numberOfRounds + ', number of finished round: ' + numberOfFinishedRounds + text 
}


newGameButton.addEventListener('click', function()
{
    var value = prompt('How many rounds?');
    if (isNaN(value) || value === '' || value === null || value <= 0) {
        alert('Incorrect value');
    } else {
        numberOfRounds = parseInt(value);
        numberOfFinishedRounds = 0;
        scoreUser = 0;
        scoreComputer = 0;
        printScore();
        printNumberOfRounds();
        outputDiv.textContent = '';
    }
    
    infoDiv.textContent = '';
})

function printScore() 
{
    resultDiv.textContent = scoreUser + ' - ' + scoreComputer;
}

function playerMove(playerChoose)
{
    if (numberOfFinishedRounds === numberOfRounds) {
        infoDiv.textContent = 'GAME OVER! Please press the  new game button!';
        return;
    }
    
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
    numberOfFinishedRounds++;
    printNumberOfRounds();
    
    if (numberOfFinishedRounds === numberOfRounds) {
        if (scoreComputer > scoreUser) {
            numberOfRoundsDiv.textContent = 'COMPUTER WON ALL GAME!';
        } else if (scoreComputer < scoreUser) {
            numberOfRoundsDiv.textContent = 'USER WON ALL GAME!';
        } else {
            numberOfRoundsDiv.textContent = "DRAW!";
        }
    }
};

function printOutput(winner, userMove, computerMove)
{
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

