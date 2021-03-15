//logo
let phase = 0;
let zoff = 0;
let slider;
let lato;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.position(window.innerWidth/2-200, window.innerHeight/2-180);
  //slider = createSlider(0, 10, 3, 0.1);
  // textFont(lato);
  // textSize(100);
  // textAlign(CENTER, CENTER);
  // //fill(0, 0, 0);
  console.log(window.innerWidth);

  var dwidth = jQuery(window).width();
jQuery(window).bind('resize', function(e){
    var wwidth = jQuery(window).width();
    if(dwidth!==wwidth){
     dwidth = jQuery(window).width();
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function(){
        this.location.reload(false); /* false to get page from cache */
    }, 500);
}
});

// function windowResized() {
//     resizeCanvas(windowWidth/2-200, windowHeight/2-180);
//   }

}

function textDraw(xoff, yoff) {
  text("T", xoff, yoff - 70);
  text("E", xoff, yoff);
  //fill(100);
}

if (window.innerWidth < 735) {
 
} else if (window.innerWidth < 1150){
function draw() {
  //background(0);
  translate(width / 2, height / 2);
  stroke(1000);
  strokeWeight(2);
  noFill();
  textDraw();
  beginShape();

  //let noiseMax = slider.value();
  let noiseMax = 1.2;
  //console.log(slider.value());

  for (let a = 0; a < TWO_PI; a += radians(5)) {
    clear();
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, window.innerHeight / 6);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  
  endShape(CLOSE);
  phase += 0.001;
  zoff += 0.005;
}
} else {

  function draw() {
    //background(0);
    translate(width / 2, height / 2);
    stroke(1000);
    strokeWeight(2);
    noFill();
    textDraw();
    beginShape();
  
    //let noiseMax = slider.value();
    let noiseMax = 1.3; // noise value
    //console.log(slider.value());
  
    for (let a = 0; a < TWO_PI; a += radians(2)) {
      clear();
      let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 5);
      let x = r*1.5 * cos(a);
      let y = r*1.5 * sin(a);
      vertex(x, y);
     
    }
    
    endShape(CLOSE);
    phase += 0.002; //rotation
    zoff += 0.005; // speed of noise
  }

}
