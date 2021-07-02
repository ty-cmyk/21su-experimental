let circles = [];
var interval;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('app');
  }

// Interaction 
function keyPressed() {
    if (keyCode === RETURN) {
        interval = setInterval(CoTwo, 1000);
    }
}

function mousePressed() {
    clearInterval(interval);
}

function touchStart() {
        interval = setInterval(CoTwo, 1000);
}

// function to create circles
function CoTwo() {
    let r = (circles.length * 5.1);
    let x = random(75, 200);
    let y = random(400, 550);
    let spot = new Circle(x, y, r);
    circles.push(spot);
        }


function draw() {
    background(0);
    fill('#1bb890');
    noStroke();
    textStyle(BOLD);
    textSize(16);
    text(circles.length*0.0051 + 'kg CO2', 15, 25);
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].show();
        circles[i].update();
    }
}

class Circle {
    constructor (x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = (-1, 1);
        this.vy = (-5, -1);
        this.speed = 1;
        this.alpha = 255;
}
    
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
      }

    move () {
        this.x = this.x + random(-this.speed, this.speed) 
        this.y = this.y + random(-this.speed, this.speed) 
}

    show() {
        
        stroke(255, this.alpha);
        strokeWeight(2);
        fill(200, 80);
        circle(this.x, this.y, this.r);
        }
};
