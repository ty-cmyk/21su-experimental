let angles = [];
let angleV = [];
var sliderA;
var sliderB;
let r = 5;
let rv, gv, bv;
var interval;


function setup() {
    var canvas = createCanvas(1000, 1000);
    sliderA = createSlider (2, 10, 3)
    sliderB = createSlider (1, 200, 100)
    canvas.parent('app');
   
    sliderA.parent('slider-1')
    sliderA.addClass("slider")

    sliderB.parent('slider-2')
    sliderB.addClass("slider")
    rv = random(10, 200);
    gv = random(10, 200);
    bv = random(10, 200);
    
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, 3 * TWO_PI);
    angleV[i] = 0.001 + i / 100
    }
}



// Interaction 
function mousePressed() {
    rv = random(10, 200);
    gv = random(10, 200);
    bv = random(10, 200);
}

// function titleText() {
//     let t = random('Shark Migration', 'Gender Wheel', 'Monarch Mating Model')
//     textStyle(BOLD);
//     textSize(16);
    
// }

function draw() {
    background(255);
    translate(500, 500);
    
    
    // noStroke();
    stroke(rv, gv, bv);
    fill(rv, gv, bv);
    circle (0, 0, 80)
    
      for (let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, -400, 400);
        strokeWeight(1);
        let x = sliderB.value();
        // map(i, 0, angles.length, -300, 300);
        fill(rv, gv, bv);
        line(x, 0, x, y);
        circle(x, y, r * sliderA.value());
        fill(rv, gv, bv);
        circle(x, 0, r * sliderA.value());
        fill(0);
        circle (x, y, 5)
        circle (x, 0, 5)
        // circle(random(100, 300), random(100, 300), r * sliderA.value());
        rotate(sin(angles[i], + sliderB.value()))
        angles[i] += 0.002;
        
        // interval = setInterval(titleText, 1000);

      }
      fill(0);
    circle (0, 0, 20)
    
}
// 

