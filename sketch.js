
var angulo = 0;

function setup() {
    createCanvas(600, 600);
    background(0);
}

var posX = 0;
var posY = 0;

var raio = 100;
var acc = 1;

function draw() {

    translate(width/2, height/2);

    var x = raio * cos(angulo);
    var y = raio * sin(angulo);

    var distOrigem = Math.sqrt(x * x + y * y);

    var alpha = map(distOrigem, 0, 300, 0, 255);

    noStroke();    
    fill(random(255), random(255), random(255), alpha);
    circle(x, y, 20);
    
    acc = (PI / 180) * abs(cos(angulo/2) * 20);
    angulo = (angulo + (PI / 180)) + acc;

    raio = abs(cos(angulo*8) * 300);
}

