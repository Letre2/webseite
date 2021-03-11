

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    wide: ("1281px", "1680px"),
    normal: ("981px", "1280px"),
    narrow: ("737px", "980px"),
    narrower: ("737px", "840px"),
    mobile: ("481px", "736px"),
    mobilep: (null, "480px"),
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    alignment: "right",
  });

  // NavPanel.

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });

  // Header.
  if (!browser.mobile && $header.hasClass("alt") && $banner.length > 0) {
    $window.on("load", function () {
      $banner.scrollex({
        bottom: $header.outerHeight(),
        terminate: function () {
          $header.removeClass("alt");
        },
        enter: function () {
          $header.addClass("alt reveal");
        },
        leave: function () {
          $header.removeClass("alt");
        },
      });
    });
  }
})(jQuery);

//logo
let phase = 0;
let zoff = 0;
let slider;
let lato;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.position(0,0);
  //slider = createSlider(0, 10, 3, 0.1);
  // textFont(lato);
  // textSize(100);
  // textAlign(CENTER, CENTER);
  // //fill(0, 0, 0);
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
  let noiseMax = 1.3;
  //console.log(slider.value());

  for (let a = 0; a < TWO_PI; a += radians(5)) {
    clear();
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
   
  }
  
  endShape(CLOSE);
  phase += 0.001;
  zoff += 0.001;
}
