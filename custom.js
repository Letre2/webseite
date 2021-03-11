// //logo
// let phase = 0;
// let zoff = 0;
// let slider;
// let lato;

// function setup() {
//   var canvas = createCanvas(window.innerWidth-200, window.innerHeight-200);
//   canvas.position(0, 0);
//   //slider = createSlider(0, 10, 3, 0.1);
//   // textFont(lato);
//   // textSize(100);
//   // textAlign(CENTER, CENTER);
//   // //fill(0, 0, 0);
//   console.log(window.innerWidth);

//   var dwidth = jQuery(window).width();
// jQuery(window).bind('resize', function(e){
//     var wwidth = jQuery(window).width();
//     if(dwidth!==wwidth){
//      dwidth = jQuery(window).width();
//     if (window.RT) clearTimeout(window.RT);
//     window.RT = setTimeout(function(){
//         this.location.reload(false); /* false to get page from cache */
//     }, 1000);
// }
// });

// }

// function textDraw(xoff, yoff) {
//   text("T", xoff, yoff - 70);
//   text("E", xoff, yoff);
//   //fill(100);
// }

// if (window.innerWidth < 735) {
  
// } else if (window.innerWidth < 1150){
// function draw() {
//   //background(0);
//   translate(window.innerWidth / 2, window.innerHeight / 2.08);
//   stroke(1000);
//   strokeWeight(2);
//   noFill();
//   textDraw();
//   beginShape();

//   //let noiseMax = slider.value();
//   let noiseMax = 1.2;
//   //console.log(slider.value());

//   for (let a = 0; a < TWO_PI; a += radians(5)) {
//     clear();
//     let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
//     let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
//     let r = map(noise(xoff, yoff, zoff), 0, 1, 100, window.innerHeight / 6);
//     let x = r * cos(a);
//     let y = r * sin(a);
//     vertex(x, y);
//   }
  
//   endShape(CLOSE);
//   phase += 0.001;
//   zoff += 0.005;
// }
// } else {

//   function draw() {
//     //background(0);
//     translate(window.innerWidth, window.innerHeight);
//     stroke(1000);
//     strokeWeight(2);
//     noFill();
//     textDraw();
//     beginShape();
  
//     //let noiseMax = slider.value();
//     let noiseMax = 1.2;
//     //console.log(slider.value());
  
//     for (let a = 0; a < TWO_PI; a += radians(5)) {
//       clear();
//       let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
//       let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
//       let r = map(noise(xoff, yoff, zoff), 0, 1, 100, window.innerHeight / 6);
//       let x = r * cos(a);
//       let y = r * sin(a);
//       vertex(x, y);
     
//     }
    
//     endShape(CLOSE);
//     phase += 0.001;
//     zoff += 0.005;
//   }

// }


