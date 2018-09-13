// INFO
// Class Fish - Pez a comer
class Fish {
  constructor(x, y, width, height, image) {
    this.x = x; 
    this.y = y; 
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image; 
  }
  draw() {
    this.x += Math.floor((Math.random() * Math.floor((Math.random() * 20) + 10)) + 1);;
    this.y += Math.floor((Math.random() * (-1)) + Math.floor((Math.random() * (-1)) + 2));;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
//Ver extend Fish -- super ver DaividZavala/webdev-PT-Mex sexta semana
//Class GlobeFish - venenoso
var moreVelocity = 10;
class GlobeFish extends Fish {
  constructor(x, y, width, height, image, damage) {
    super(x, y, width, height, image)
    this.damage = damage
  }
  draw() {
    this.x -= Math.floor((Math.random() * Math.floor((Math.random() * moreVelocity) - 1)) - 1);;
    this.y += Math.floor((Math.random() * (-1)) + Math.floor((Math.random() * (-1)) + 2));;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

//AUMENTO DE DIFICULTAD AL AUMENTAR LA VELOCIDAD DE LOS PECES GLOBO
setInterval(() => {moreVelocity++;}, 500);


//Class crab - avienta burbujas -> No lo hace...version 2.0 futura...
class Crab extends Fish {
  constructor(x, y, width, height, image, bubbles) {
    super(x, y, width, height, image)
    this.bubbles = bubbles; //
  }
  draw() {
    this.x -=  Math.floor((Math.random() * Math.floor((Math.random() * 20) - 1)) + 1);
    //if(this.x < 0) this.x += 200; //Regresa el cangrejo al llegar a la x = 0
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

//Class Whale - Ballenas
class Whale extends Fish {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image)
  }
  draw() {
    this.x -= Math.floor((Math.random() * Math.floor((Math.random() * 25) - 1)) - 1);;
    this.y += Math.floor((Math.random() * (-1)) + Math.floor((Math.random() * (-1)) + 2));;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}