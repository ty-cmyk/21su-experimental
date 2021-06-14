let circles = [];



function setup() {
    createCanvas(800, 800);
    // var counter1 = new Counter(second()).start();
  }
  
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
        let r = (circles.length * 1.7);
        let x = random(50, 750);
        let y = random(50, 750);
        let spot = new Circle(x, y, r);
        circles.push(spot);
    }
    console.log (circles.length)
    // fill(255)
    // text('CO2: ' + circles.length, 10, 10);
    // noLoop();
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
        circle(this.x, this.y, this.r *2);
        fill(0);
        text(circles.length*3 + 'kg CO2', this.x -5, this.y +5);
        }
        
        

    // for (let i=0; i < 500; i++) {
    //     let x = random(width);
    //     let y = random(height);
    //     let r = random(10, 40);
    //     circles[i] = new Circle (x, y, r);
    // }
};

  // vue array to hold data
//   var vm = new Vue({
//     el: "#app",
//     data: {
  
//       circles: []
//     },
//   // number of events returned
//     computed: {
//       numEvents: function () {
//         return this.circles.length
//       }
//     },
    
    
    
//   });

