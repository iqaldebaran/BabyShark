// INFORMACIÓN
// Este js, obtiene la posisión del mouse y se mueve con el objeto

// -------- VARIABLES GLOBALES --------------
//Asignamos la posicion del mouse a 0
var mouseX = 0;
var mouseY = 0;
var canvasPos = getPosition(canvas); //Llamamos a la funcion para obtener las coordenadas del mause en el canvas

class BabyShark{
  constructor(){
    this.mouseX = 0;
    this.mouseY = 0;
  }
}

function mousePos() { 
  context.clearRect(0, 0, canvas.width, canvas.height);
  var image = new Image();
  image.src = "../img/babyshark.png";
  context.drawImage(image, mouseX, mouseY, 70, 50);

  // context.beginPath();
  // context.arc(mouseX, mouseY, 20, 0, 2 * Math.PI, true); //Dibuja el circulo, el tercer parametro es el tamaño
  // context.fillStyle = "#FF6A6A";
  // context.fill();
  requestAnimationFrame(mousePos);
}

//  "Escuchamos" al puntero del mouse
canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x-50;
  mouseY = e.clientY - canvasPos.y-70;
  // console.log("X: ",mouseX, " Y: ", mouseY)

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