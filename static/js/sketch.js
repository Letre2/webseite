//logo
//let canvas = document.querySelector("canvas");
let phase = 0;
let zoff = 0;
let slider;
let lato;

function setup() {
  let bannerHeight = document.querySelector("#banner").offsetHeight;
  let bannerWidth = document.querySelector("#banner").offsetWidth;
  myCanvas = createCanvas(400, 400);
  myCanvas.parent('canvasDiv');
  //console.log("hallo");
}
 
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

function draw() {
    //background(0);
    translate(width / 2, height / 2);
    stroke(1000);
    strokeWeight(2);
    noFill();
    //textDraw();
    beginShape();
    let noiseMax = 1.2; // noise value
  
    for (let a = 0; a < TWO_PI; a += radians(2)) {
      clear();
      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height/7);
      let x = r*1.5 * cos(a);
      let y = r*1.5 * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    phase += -0.003; //rotation
    zoff += 0.005; // speed of noise
  }

}else{

  function draw() {
    //background(0);
    translate(width / 2, height / 2);
    stroke(1000);
    strokeWeight(2);
    noFill();
    //textDraw();
    beginShape();
    let noiseMax = 1.3; // noise value
  
    for (let a = 0; a < TWO_PI; a += radians(2)) {
      clear();
      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height/3);
      let x = r*1.5 * cos(a);
      let y = r*1.5 * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    phase += -0.002; //rotation
    zoff += 0.003; // speed of noise
  }

}




