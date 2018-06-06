var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var outputDiv = document.getElementById('output');
var resultDiv = document.getElementById('result');
var newGameButton = document.getElementById('new-game-button');
var numberOfRoundsDiv = document.getElementById('number-of-rounds');
var infoDiv = document.getElementById('info');
var modalDiv = document.querySelector('.modal');
var modalContent = document.querySelector('.modal .content');

var params = {
    scoreUser: 0,
    scoreComputer: 0,
    numberOfRounds: undefined,
    numberOfFinishedRounds: 0,
    progress: []
};

var paper = 1;
var rock = 2;
var scissors = 3;


function convertOptionsMove(move) {
    if (move === paper) {
        return 'paper';
    } else if (move === rock) {
        return 'rock';
    } else if (move === scissors) {
        return 'scissors';
    }
}

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
    var isUserWon = false;
    var isComputerWon = false;
    
    if (playerChoose === paper) {
        if (computerMove === 1) {
            printOutput('', playerChoose, computerMove);
            
        } else if (computerMove === 2) {
            printOutput('user', playerChoose, computerMove);
            params.scoreUser++;
            isUserWon = true;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
            isComputerWon = true;
        }
            
    } else if (playerChoose === rock) {
        if (computerMove === 2) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 3) {
            printOutput('user', playerChoose, computerMove); 
            params.scoreUser++;
            isUserWon = true;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
            isComputerWon = true;
        }
    
    } else {
        if (computerMove === 3) {
            printOutput('', playerChoose, computerMove);
        } else if (computerMove === 1) {
            printOutput('user', playerChoose, computerMove); 
            params.scoreUser++;
            isUserWon = true;
        } else {
            printOutput('computer', playerChoose, computerMove);
            params.scoreComputer++;
            isComputerWon = true;
        }
    }
    
    printScore();
    params.numberOfFinishedRounds++;
    printNumberOfRounds();
    
    params.progress.push({userMove: convertOptionsMove(playerChoose),
                         computerMove: convertOptionsMove(computerMove),
                         roundResult: (isUserWon ? '1':'0') + '-' + (isComputerWon ? '1' : '0'),
                         totalResult: params.scoreUser + ' - ' + params.scoreComputer});
    
    if (params.numberOfFinishedRounds === params.numberOfRounds) {
        
        for (var i = 0; i < params.progress.length; i++) {
            var table = document.querySelector('.content table tbody');
    
            table.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + params.progress[i].userMove + '</td> <td>' + params.progress[i].computerMove + '</td> <td>' + params.progress[i].roundResult + '</td><td>' + params.progress[i].totalResult + '</td></tr>'
        }
        
        if (params.scoreComputer > params.scoreUser) {
            modalContent.innerHTML += 'COMPUTER WON ALL GAME!';
        } else if (params.scoreComputer < params.scoreUser) {
            modalContent.innerHTML += 'USER WON ALL GAME!';
        } else {
            modalContent.innerHTML += "DRAW!";
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

function closeModal() {
    document.querySelector('#modal-overlay').classList.remove('show');
    modalDiv.classList.remove('show');
}

var closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

document.querySelector('#modal-overlay').addEventListener('click', closeModal);

modalDiv.addEventListener('click', function(event) {
    event.stopPropagation();
});
