// INFO
// Class Fish - Pez a comer

class Fish{
  constructor(){
    this.x = 800;
    this.y = 200;
    this.width = 30;
    this.height = 20;
    this.image = new Image();
    this.image.src = "../img/fish1.png"
  }
  draw(){
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}