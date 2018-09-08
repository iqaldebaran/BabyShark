// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


// CONTADOR SCORE
var score = 0;

console.log("que es: " + document.getElementById("score").innerHTML);

//Creamos el objeto babyShark - BabyShark.js
var babyShark = new BabyShark();
// Mueve el mouse con el objeto -BabyShark.js
mousePos();

// IMAGENES:
var imgFish = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Fish1.png";
var imgGlobeFish = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/GlobeFish.png";
var imgCrab = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Crab.png";
var imgBubbles = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/bubbles1.png";
var imgWhale = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Whale.png"

// SONIDOS;
var soundEat = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Am.mp3";
var soundKill = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/O-no.mp3";
var soundBack = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/BabySharkTheme1.mp3";

// VARIABLES DE SONIDOS
var soundBabyShark = new Audio(soundEat); //Al comer un pez
var soundKillBabyShark = new Audio(soundKill); //Al comer un pez globo... muere
var soundBackFirst = new Audio(soundBack); //Sonido de fondo

// FUNCION START GAME
function startGame() {
  soundBackFirst.play();
  soundBackFirst.volume = 0.2;
  setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    generateFish();
    generateGlobeFish();
    generateCrab();
    generateWhale();
  }, 1000 / 60);
}


// ----- GENERACION DE ANIMALES ----------
var globeFishes = [];
var fishes = [];
var crabs = [];
var whales = [];

// Velocidad de generacion de peces
setInterval(function () {
  var fish = new Fish(11, Math.floor((Math.random() * canvas.height) + 1), 30, 20, imgFish);
  fishes.push(fish);
}, 1000); //Cambia la cantidad de peces a generar

// Velocidad de generacion de peces globo
setInterval(function () {
  var globeFish = new GlobeFish(canvas.width, Math.floor((Math.random() * canvas.width) + 1), 55, 50, imgGlobeFish);
  globeFishes.push(globeFish);
}, 1000); //Cambia cantidad de peces globo a generar

// Velocidad de generacion de Cangrejos - Crab
setInterval(function () {
  var crab = new Crab(canvas.width, canvas.height - 50, 55, 50, imgCrab);
  crabs.push(crab);
}, 5000); //Cambia cantidad de cangrejos a generar

// Velocidad de generacion de Ballenas - Whale
setInterval(function () {
  var whale = new Whale(canvas.width, Math.floor((Math.random() * canvas.width) + 1), 500, 300, imgWhale);
  whales.push(whale);
}, 10000); //Cambia cantidad de Ballenas a generar

// ---- FUNCIONES DIBUJAN Y EVENTOS EN COLISION
function generateFish() {
  fishes.forEach(function (fish, index) {
    fish.draw();
    if (fish.x > canvas.width - 100) return fishes.splice(index, 1); //Borra al pez para liberar memoria
    //  Aqui se come el tiburon al pez
    if (babyShark.collision(fish)) {
      fishes.splice(index, 1); //Come un pez
      document.getElementById("score").innerHTML = score++; //Imprime el score en pantalla cada vez que come un pez
      soundBabyShark.play(); //Sonido Am.mp3
    };
  })
}

function generateGlobeFish() {
  globeFishes.forEach(function (globeFish, index) {
    globeFish.draw();
    if (globeFish.x < 20) return globeFishes.splice(index, 1); //Borra al pezGlobo para liberar memoria
    //  Accion cuando colisiona con el pez globo
    if (babyShark.collision(globeFish)) {
      gameOver();
    }
  })
}

function generateWhale() {
  whales.forEach(function (whale, index) {
    whale.draw();
    if (whale.x < 20) return whales.splice(index, 1); //Borra a la Ballena para liberar memoria
    //  Accion cuando colisiona con la Ballena
    if (babyShark.collision(whale)) {
      gameOver();
    }
  })
}

function generateCrab() {
  crabs.forEach(function (crab, index) {
    crab.draw();
    if (crab.x < 20) return crabs.splice(index, 1); //Borra al cangrejo para liberar memoria
    //  Accion cuando colisiona con el Cangrejo
    if (babyShark.collision(crab)) {
      gameOver();
      // crabs.splice(index, 1); //Come un cangrejo
      // document.getElementById("score").innerHTML = score++; //Imprime el score en pantalla cada vez que come un pez
    }
  })
}

// -------BOTON START ------------
document.getElementById("start-game").onclick = function () {
  switch (document.getElementById("start-game").innerHTML) {
    case "Start":
      startGame()
      document.getElementById("start-game").innerHTML = "Stop"
      break;
    case "Stop":
      gameOver();
      document.getElementById("start-game").innerHTML = "Start"
      break;
  }
}

// ---- FUNCION GAMEOVER -----
var gameOver = function () {
  // Definimos el tamaño y fuente de nuestro texto
  context.font = "60px Avenir";
  var textGameOver = "GAME OVER";
  // Dibujamos el texto en el canvas.
  var textLength = context.measureText(textGameOver).width / 2; //Para centrar el GameOver sin improtar el tamaño del canvas
  context.fillText(textGameOver, (canvas.width / 2) - textLength, canvas.height / 2);
  soundKillBabyShark.play(); //Sonido al comer pez globo - muere

  // location.reload();

  // Detenemos la ejecución del intervalo
  canvas.removeEventListener("mousemove", setMousePosition);
  clearInterval(setInterval);
  //context.clearRect(0, 0, canvas.width, canvas.height);
  soundBackFirst.pause();


}