
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
   video.size(550,500);

   canvas = createCanvas(500,500);
   canvas.position(560,100);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = floor(leftWristX - rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + " difference = " + difference);

    }
}

function draw(){
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    background('#969A97');
    textSize(difference);
    fill('#FE787');
    text('Ujjwal',50,400); 

}