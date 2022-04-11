function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
img = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#330aff");
    text("Dog", 250, 60);
    noFill();
    stroke("#330aff");
    rect(180, 50, 180, 350);
}