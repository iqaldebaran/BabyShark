// Llamada al canvas del html
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Creamos el objeto babyShark - BabyShark.js
var babyShark = new BabyShark();
// Mueve el mouse con el objeto -BabyShark.js
mousePos();




function startGame() {
  setInterval = setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    generateFish();
    generateGlobeFish();
    // fish.draw();
    //var fish = new Fish();
  }, 2000 / 60);
}


var globeFishes = [];
var fishes = [];
// Velocidad de generacion de peces
setInterval(function () {
  var fish = new Fish();
  fishes.push(fish);
  
}, 200);
// Velocidad de generacion de peces globo
setInterval(function () {
  var globeFish = new GlobeFish();
  globeFishes.push(globeFish);
}, 1000);


function generateFish() {
  fishes.forEach(function (fish, index) {
    fish.draw();
    //  Aqui se come el tiburon al pez
    if (babyShark.collision(fish)) fishes.splice(index,1);
  })
}

function generateGlobeFish(){
  globeFishes.forEach(function (globeFish) {
    globeFish.draw();
    //  Accion cuando colisiona con el pez globo
    if (babyShark.collision(globeFish)) console.error("Me comiste");
  })
}
startGame();