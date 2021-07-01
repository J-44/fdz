noseX = 0;
noseY = 0;
function preload() {
    clown=loadImage('https://i.postimg.cc/WbTkgjb4/mustache.png');}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log("results")
        noseX = results[0].pose.nose.x-24;
        noseY = results[0].pose.nose.y-1;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log("PoseNet is initialize")
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown,noseX,noseY,50,30);
}

function takeSnapshot() {
    save('myFilterImage.png');
}