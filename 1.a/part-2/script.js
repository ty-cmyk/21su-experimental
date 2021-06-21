let circles = [];
var counter = 0;
var interval;

function setup() {
    var canvas = createCanvas(600, 600);
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
    if (clearInterval(interval)) {
            // remove this particle
            // return this.alpha < 0;
        }
}

function CoTwo() {
    let r = (circles.length * 5.1);
    let x = random(100, 500);
    let y = random(100, 500);
    let spot = new Circle(x, y, r);
    circles.push(spot);
    // redraw();
        }
        





function draw() {
    background(0);
    fill('#1bb890');
    noStroke();
    text(circles.length*0.0051 + 'kg CO2', 15, 25);
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].show();
        circles[i].update();
        // if (circles[i].finished()) {
        //     // remove this particle
        //     // circles.splice(i, 1);
        // }
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

    // finished() {
    //     return this.alpha < 0;
    //   }
    
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
        // fill(255, 100);
        // noStroke();
        // // text(circles.length*0.0051 + 'kg', this.x -2, this.y -2)
        }
};
