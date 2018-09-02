// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Creamos el objeto babyShark - BabyShark.js
var babyShark = new BabyShark();
// Mueve el mouse con el objeto -BabyShark.js
mousePos();

// Cargamos imágenes y sonidos en variables:
var imgFish = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Fish1.png";
var imgGlobeFish = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/GlobeFish.png";
var imgCrab = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Crab.png"
var soundEat = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/Am.mp3"
var imgBubbles = "https://s3.amazonaws.com/www.norverum.com/BabySharkAssets/bubbles1.png"

// VARIABLES DE SONIDOS
var soundBabyShark = new Audio(soundEat); //Al comer un pez

// FUNCION START GAME
function startGame() {
  setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    generateFish();
    generateGlobeFish();
    generateCrab();
  }, 1000 / 60);
}

// CONTADOR SCORE
var score = 0;

// ----- GENERACION DE ANIMALES ----------
var globeFishes = [];
var fishes = [];
var crabs = [];
// Velocidad de generacion de peces
setInterval(function () {
  var fish = new Fish(11, Math.floor((Math.random() * canvas.height) + 1), 30, 20, imgFish);
  fishes.push(fish);
}, 1000); //Cambia la cantidad de peces a generar

// Velocidad de generacion de peces globo
setInterval(function () {
  var globeFish = new GlobeFish(canvas.width, Math.floor((Math.random() * canvas.width) + 1), 55, 50, imgGlobeFish);
  globeFishes.push(globeFish);
}, 3000); //Cambia cantidad de peces globo a generar

// Velocidad de generacion de Cangrejos - Crab
setInterval(function () {
  var crab = new Crab(canvas.width, canvas.height - 50, 55, 50, imgCrab);
  crabs.push(crab);
}, 1000); //Cambia cantidad de cangrejos a generar

// FUNCIONES DIBUJAN Y EVENTOS EN COLISION
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
      console.error("Me comiste");
    }
  })
}

function generateCrab() {
  crabs.forEach(function (crab, index) {
    crab.draw();
    if (crab.x < 20) return crabs.splice(index, 1); //Borra al cangrejo para liberar memoria
    //  Accion cuando colisiona con el Cangrejo
    if (babyShark.collision(crab)) {
      crabs.splice(index, 1); //Come un cangrejo
      document.getElementById("score").innerHTML = score++; //Imprime el score en pantalla cada vez que come un pez

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

// ---- Funcion GameOver -----
var gameOver = function () {
  // Definimos el tamaño y fuente de nuestro texto
  context.font = "40px Avenir";
  // Dibujamos el texto en el canvas.
  context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);


  // Detenemos la ejecución del intervalo
  canvas.removeEventListener("mousemove", setMousePosition);
  location.reload();
   clearInterval(setInterval);
   context.clearRect(0, 0, canvas.width, canvas.height);

}