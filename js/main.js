// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Creamos el objeto babyShark - BabyShark.js
var babyShark = new BabyShark(); 
// Mueve el mouse con el objeto -BabyShark.js
mousePos();

// Creamos objeto fish - Fish.js
var fish = new Fish();


startGame();

function startGame(){
  setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fish.draw();

    if(babyShark.collision(fish)) console.log("Me comiste");
  }, 1000 / 60);
}

