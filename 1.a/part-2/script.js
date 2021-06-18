let circles = [];
var counter = 0;
var interval;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent('app');
    timer = createP('timer')
    // noLoop();
    // interval = setInterval(CoTwo, 1000);
    // var counter1 = new Counter(second()).start();
  }
  
//   function timeIt() {
//       timer.html(counter);
//       counter++;
//   }
//   class Counter {
//     constructor(start,wait) {
//       this.count=start;
//       this.wait = wait;
//       this.p = createP('');
//     }
//     start() {
//       setInterval(()=>this.countIt(),this.wait);
//       return this;
//     }
  
//     countIt() {
//       this.count++; 
//       this.p.html(this.count);
//     }
//   }

function keyPressed() {
    if (keyCode === RETURN) {
        // let r = (circles.length * 5.1);
        // let x = random(50, 750);
        // let y = random(50, 750);
        // let spot = new Circle(x, y, r);
        // circles.push(spot);
        // // redraw();
        interval = setInterval(CoTwo, 1000);
        
        
    }
}

function mousePressed() {
    clearInterval(interval);
}

function CoTwo() {
    let r = (circles.length * 5.1);
    let x = random(50, 750);
    let y = random(50, 750);
    let spot = new Circle(x, y, r);
    circles.push(spot);
    redraw();
        }
        





function draw() {
    background(0);

    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].show();
        
    }
}

class Circle {
    constructor (x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 1;
        
    }


    move () {
        this.x = this.x + random(-this.speed, this.speed) 
        this.y = this.y + random(-this.speed, this.speed) 
}

    show() {
        
        stroke(255, 60);
        strokeWeight(6);
        fill(255, 80);
        circle(this.x, this.y, this.r);
        fill(0);
        text(circles.length*3 + 'kg CO2', this.x -5, this.y +5);
        
        }
};



