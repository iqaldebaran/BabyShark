// INFORMACIÓN
// Class BabyShark y asigna seguimiento de la imagen al mouse

// -------- VARIABLES GLOBALES --------------
//Asignamos la posicion del objeto a 0
var mouseX = 0;
var mouseY = 0;

class BabyShark {
  constructor() {
    this.width = 70;
    this.height = 50;
    this.image = new Image();
    this.image.src = "../img/babyshark.png";
  }
  draw(x, y) { //x y y son las posiciones del mouse para que siga al cursor
    context.drawImage(this.image, x, y, this.width, this.height);
  }
  // Metodo de colision - comparamos el "x" y "y" del mouse y con el otro elemento regresa true o false
  collision(item) {
    return (mouseX < item.x + item.width) &&
      (mouseX + this.width > item.x) &&
      (mouseY < item.y + item.height) &&
      (mouseY + this.height > item.y);
  }
}

// SEGUIMIENTO DE LA IMAGEN AL MOUSE
function mousePos() { 
  // context.clearRect(0, 0, canvas.width, canvas.height); // Esta linea no permitia dibujar al otro pez
  babyShark.draw(mouseX, mouseY);
  requestAnimationFrame(mousePos);
}

//  "Escuchamos" al puntero del mouse
canvas.addEventListener("mousemove", setMousePosition, false);

var canvasPos = getPosition(canvas); //Llamamos a la funcion para obtener las coordenadas del mouse en el canvas

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
  // if (mouseX > canvas.width-babyShark) mouseX = babyShark.width - canvas.width;
}
// Obtenemos la posición del mouse debido a que toma la inicial de la pagina y no la del canvas
function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}