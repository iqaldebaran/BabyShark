// INFO
// Class Fish - Pez a comer

class Fish {
  constructor() {
    this.x = 11 //Math.floor((Math.random() * 800) + 1);
    this.y = Math.floor((Math.random() *800) + 1);;
    this.width = 30;
    this.height = 20;
    this.image = new Image();
    this.image.src = "https://s3.amazonaws.com/www.norverum.com/Fish1.png"
  }
  draw() {
    this.x += Math.floor((Math.random() * Math.floor((Math.random() * 20) + 1)) + 1);;
    this.y += Math.floor((Math.random() * (-1)) + Math.floor((Math.random() * (-1)) + 2));;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class GlobeFish {
  constructor() {
    this.x = 800 //Math.floor((Math.random() * 800) + 1);
    this.y = Math.floor((Math.random() * 800) + 1);;
    this.width = 55;
    this.height = 50;
    this.image = new Image();
    this.image.src = "https://s3.amazonaws.com/www.norverum.com/GlobeFish.png"
  }
  draw() {
    this.x -= Math.floor((Math.random() * Math.floor((Math.random() * 20) - 1)) - 1);;
    this.y += Math.floor((Math.random() * (-1)) + Math.floor((Math.random() * (-1)) + 2));;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}