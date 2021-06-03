noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,450);
    canvas = createCanvas(700,500);
    canvas.position(650,225);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}
function draw(){
    background('#e5e5e5');
    document.getElementById("square_size").innerHTML = "Width and Height of Square is "+difference+"px."
    stroke('#faa307')
    fill('#faa307')
    square(noseX,noseY,difference);
}
function modelloaded(){
    console.log('PoseNet is Initialized!')
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}