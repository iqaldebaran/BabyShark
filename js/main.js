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
setInterval(function () {
  var fish = new Fish();
  fishes.push(fish);
  var globeFish = new GlobeFish();
  globeFishes.push(globeFish);
}, 200);

function generateFish() {
  fishes.forEach(function (fish) {
    fish.draw();
    //  Aqui se come el tiburon al pez
    if (babyShark.collision(fish)) console.log("Me comiste");
  })
}

function generateGlobeFish(){
  globeFishes.forEach(function (globeFish) {
    globeFish.draw();
    //  Aqui se come el tiburon al pez
    if (babyShark.collision(globeFish)) console.error("Me comiste");
  })
}
startGame();