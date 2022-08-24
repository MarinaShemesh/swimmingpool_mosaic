console.log('fading grid');
//let textArray = ['1','A','z'];

const size = 20;


function setup() {
  createCanvas(2000, 1750);
  background(115);
  colorMode(HSB);
  textSize(32);

}


function draw() {



 
  stroke(255);
  strokeWeight(5);


  for (var i = 0; i < 10; i = i + 1) {
    for (let x = 0; x < width; x += 50) {

      for (let y = 0; y < height; y += 50) {

        let h = i * 20;
        let s = random(20, 90);
        fill(h, s, 85);
          
        rect(x, y, 100, 100);
        console.log(text(textArray[0]);


      }

    }

  }

}

function mousePressed() {
  save('mosaic.png');
}

//https://editor.p5js.org/sjnha/sketches/r1GsiEBSW