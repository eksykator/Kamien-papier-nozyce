var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');

var paper = 1;
var rock = 2;
var scissors = 3;


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


function playerMove(playerChoose) {
    console.log(playerChoose);
};