function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('dog_cat.jpg');
}
function modelLoaded(){
    console.log('Model Loaded!');
    status  = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
}
function draw(){
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: objects Detected";
            fill("#2a007d");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#2a007d");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}