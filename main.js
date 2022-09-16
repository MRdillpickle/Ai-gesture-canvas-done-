noseX = 0;
noseY = 0;
diffrence = 0;
lristx = 0;
rristx = 0;
function setup () {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#FF6347');
    document.getElementById("square_side").innerHTML = "width and height or square: " + diffrence + "px.";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,diffrence);


}
function modelLoaded() {
    console.info("''PoseNet' is declared as" + poseNet);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = ", noseX , "noseY = ", noseY);
        lristx = results[0].pose.leftWrist.x;
        rristx = results[0].pose.rightWrist.x;
        diffrence = floor(lristx - rristx);
        console.error("lr: ",lristx,"rr: ",rristx,"di:",diffrence);
    }
}