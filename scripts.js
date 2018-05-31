var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');

var paper = 1;
var rock = 2;
var scissors = 3;

function playerMove(playerChoose) {
    console.log(playerChoose);
    var computerMove = randomComputerMove();
    
    if (playerChoose === paper) {
        if (computerMove === 1) {
            console.log("REMIS");
        } else if (computerMove === 2) {
            console.log("WYGRAŁEŚ");
        } else {
        console.log("PRZEGRAŁEŚ!")
        }
            
    } else if (playerChoose === rock) {
        if (computerMove === 2) {
            console.log("REMIS");
        } else if (computerMove === 1) {
            console.log("WYGRAŁEŚ!"); 
        } else {
            console.log("PRZEGRAŁEŚ!");
        }
    
    } else {
        if (computerMove === 3) {
            console.log("REMIS");
        } else if (computerMove === 1) {
            console.log("WYGRAŁEŚ!"); 
        } else {
            console.log("PRZEGRAŁEŚ!")
        }
    }                                                            
};

function randomComputerMove()
{
    var computerMove = Math.round(Math.random() * 2 + 1);
    return computerMove;
}

paperButton.addEventListener('click', function()
{
    playerMove(paper);
    
    /*var computerMove = randomComputerMove();
    
    if (computerMove === 1) {
        console.log("REMIS");
    } else if (computerMove === 2) {
       console.log("WYGRAŁEŚ!"); 
    } else {
        console.log("PRZEGRAŁEŚ!")
    }*/
    
});

rockButton.addEventListener('click', function()
{
    playerMove(rock);
   /* var computerMove = randomComputerMove();
    
    if (computerMove === 2) {
        console.log("REMIS");
    } else if (computerMove === 1) {
       console.log("WYGRAŁEŚ!"); 
    } else {
        console.log("PRZEGRAŁEŚ!")
    }*/
});

scissorsButton.addEventListener('click', function()
{
    playerMove(scissors);
    /*var computerMove = randomComputerMove();
    
    if (computerMove === 3) {
        console.log("REMIS");
    } else if (computerMove === 1) {
       console.log("WYGRAŁEŚ!"); 
    } else {
        console.log("PRZEGRAŁEŚ!")
    }*/
});


