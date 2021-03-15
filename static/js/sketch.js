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
  //myCanvas.position(bannerWidth/2, bannerHeight, "relative");
  //myCanvas.position(bannerWidth, bannerHeight, "initial");
  //resizeCanvas(bannerWidth, bannerHeight);

  //slider = createSlider(0, 10, 3, 0.1);
  // textFont(lato);
  // textSize(100);
  // textAlign(CENTER, CENTER);
  // //fill(0, 0, 0);
  //console.log(document.querySelector("#banner").offsetHeight);
  
//   var dwidth = jQuery(window).width();
//   var dheight = bannerHeight;
// jQuery(window).bind('resize', function(e){
//     var wwidth = jQuery(window).width();
//     var wheight = bannerHeight;
//     if(dwidth!==wwidth && dheight !== wheight){
//      dwidth = jQuery(window).width();
//      dheight = bannerHeight;
//     if (window.RT) clearTimeout(window.RT);
//     window.RT = setTimeout(function(){
//         this.location.reload(false); /* false to get page from cache */
//     }, 500);
// }
// });


    console.log("hallo");

  
}

function textDraw(xoff, yoff) {
  text("T", xoff, yoff - 70);
  text("E", xoff, yoff);
  //fill(100);
}



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


