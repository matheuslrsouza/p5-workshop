var posX = 0;
var posY = 0;

var velX = 0.5;
var velY = 0;

var theta;

function setup() {
    createCanvas(600, 600);
    background(0);

    // TODO inicializar theta
}

function draw() {
    var centroX = width / 2;
    var centroY = height / 2;

    translate(centroX, centroY);
    circle(posX, posY, 30);

    posX += velX;
    posY += velY;

    //TODO calcular o deslacamento do objeto baseado no ângulo theta
}

