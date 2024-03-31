const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width=600;
canvas.height=600;

const background = new Image();
background.src ="images/space.png";

function game(){
console.log("game");
}
setInterval(game, 1000/60);