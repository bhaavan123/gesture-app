NoseX = 0;
NoseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
canvas = createCanvas(350,350);
canvas.position(800,250);

video = createCapture(VIDEO);
video.size(350,350);
video.position(400,250);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log(leftWristX,rightWristX);
    difference = floor(leftWristX - rightWristX);
    console.log(NoseX,NoseY);
}    
}

function draw(){
    document.getElementById("status").innerHTML = "Size of Square = "+difference+"px";
    background("white");
    fill("blue");
    stroke("red");
    square(NoseX,NoseY,difference);
   
}


