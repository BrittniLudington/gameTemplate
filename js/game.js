import {timer} from "./timer.js";


let displayCanvas, playerCanvas, groundCanvas;
let displayContext, playerContext, groundContext;
// loads all resources. Must put up a loading screen.
function loadGame()
{
    displayCanvas = document.getElementById("displayCanvas");
    displayCanvas.width = 640;
    displayCanvas.height = 400;
    displayContext = displayCanvas.getContext("2d");
    let loadImg = new Image();
    loadImg.src = "./img/loadTest.png";

    loadImg.onload = function()
    {
        displayContext.drawImage(loadImg,0,0);
    }
    let promise = new Promise(function(resolve,reject)
    {
        setTimeout(function()
        {
            resolve(getResources());
        },2000)
    })
    .then(function(value)
    {
        displayContext.clearRect(0,0,displayCanvas.width,displayCanvas.height);
        
        console.log("done!");
    })
}

function getResources()
{
    playerCanvas = document.getElementById("playerCanvas");
    playerCanvas.width = 640;
    playerCanvas.height = 400;
    playerContext = displayCanvas.getContext("2d");

    groundCanvas = document.getElementById("groundCanvas");
    groundCanvas.width = 640;
    groundCanvas.height = 400;
    groundContext = displayCanvas.getContext("2d");
}

// function that is repeatedly called by requestAnimationFrame.
function playGame()
{

}

// goes to main gameplay
function startGame()
{

}

// playGame goes here during main gameplay
function mainGame()
{
    if(timer.checkFPS())
    {
        // frames per second update
    }
}


loadGame();