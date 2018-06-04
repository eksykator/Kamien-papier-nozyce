var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var outputDiv = document.getElementById('output');
var resultDiv = document.getElementById('result');
var newGameButton = document.getElementById('new-game-button');
var numberOfRoundsDiv = document.getElementById('number-of-rounds');
var infoDiv = document.getElementById('info');

var params = {
    scoreUser: 0,
    scoreComputer: 0,
    numberOfRounds: undefined,
    numberOfFinishedRounds: 0
};

var paper = 1;
var rock = 2;
var scissors = 3;


function openModal() {
    document.getElementById('modal-overlay').classList.add('show');
    document.querySelector('.modal').classList.add('show');
}

function printNumberOfRounds() {
    var text = ', number of rounds to win: ';
    if (params.numberOfRounds % 2 === 0) {
        text += params.numberOfRounds/2 + 1;
    } else {
        text += Math.ceil(params.numberOfRounds/2);
    }
    
    numberOfRoundsDiv.textContent = 'Number of rounds: ' + params.numberOfRounds + ', number of finished round: ' + params.numberOfFinishedRounds + text 
}


newGameButton.addEventListener('click', function() {
    var value = prompt('How many rounds?');
    if (isNaN(value) || value === '' || value === null || value <= 0) {
        alert('Incorrect value');
    } else {
        params.numberOfRounds = parseInt(value);
        params.numberOfFinishedRounds = 0;
        params.scoreUser = 0;
        params.scoreComputer = 0;
        printScore();
        printNumberOfRounds();
        outputDiv.textContent = '';
    }
    
    infoDiv.textContent = '';
})

function printScore() {
    resultDiv.textContent = params.scoreUser + ' - ' + params.scoreComputer;
}

function playerMove(playerChoose) {
    if (params.numberOfFinishedRounds === params.numberOfRounds) {
        infoDiv.textContent = 'GAME OVER! Please press the  new game button!';
        return;
    }
    
    var computerMove = randomComputerMove();
    
    if (playerChoose === paper) {
        if (computerMove === 1) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 2) {
            printOutput('user', playerChoose, computerMove);
            params.scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
        }
            
    } else if (playerChoose === rock) {
        if (computerMove === 2) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 3) {
            printOutput('user', playerChoose, computerMove); 
            params.scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
        }
    
    } else {
        if (computerMove === 3) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 1) {
            printOutput('user', playerChoose, computerMove); 
            params.scoreUser++;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
        }
    }
    
    printScore();
    params.numberOfFinishedRounds++;
    printNumberOfRounds();
    
    
    if (params.numberOfFinishedRounds === params.numberOfRounds) {
        
        var modalContent = '';
        modalContent = document.querySelector('.content');
        
        if (params.scoreComputer > params.scoreUser) {
            modalContent.textContent = 'COMPUTER WON ALL GAME!';
        } else if (params.scoreComputer < params.scoreUser) {
            modalContent.textContent = 'USER WON ALL GAME!';
        } else {
            modalContent.textContent = "DRAW!";
        }
        
        openModal();
    }
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

function randomComputerMove() {
    var computerMove = Math.round(Math.random() * 2 + 1);
    return computerMove;
}

printScore();

function buttonClickEvent() {
    var valueDataMove = this.getAttribute('data-move');
    valueDataMove = parseInt(valueDataMove);
    playerMove(valueDataMove);
}

var buttons = document.querySelectorAll('.player-move');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClickEvent);
}