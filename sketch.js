// let sharuk_img;
// let noseX,noseY;
// let reyeX,reyeY;
// let leyeX,leyeY;
let cap;
let posenet;
let sp,skeleton;
let actimg,speimg,smoimg;

function setup(){
    createCanvas(640, 480); 
    cap = createCapture(VIDEO);
    cap.size(640, 480); 
    cap.hide(); 
    posenet = ml5.poseNet(cap, modelLoaded);
    posenet.on('pose', gotPoses);

    actimg = loadImage('images/shahrukh.png');
    speimg = loadImage('images/specs.png');
    smoimg = loadImage('images/cigar.png');
}

function gotPoses(poses){
    console.log(poses);
    if(poses.length > 0){
        sp= poses[0].pose;
        skeleton= poses[0].skeleton;
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(cap, 0, 0);

    fill(255,0,0);
    if(sp){
        for(let i=0; i<sp.keypoints.length; i++){
            ellipse(sp.keypoints[i].position.x, sp.keypoints[i].position.y, 30);
        }

        stroke(255,255,255);
        strokeWeight(4);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        //for getting image on the face of the person
        image(actimg, sp.nose.x-40, sp.nose.y-60, 100, 100);
        image(speimg, sp.nose.x-35, sp.nose.y-50, 80, 80);
        image(smoimg, sp.nose.x-35, sp.nose.y+5, 80, 80);

    }
}



// function setup(){
//     //createCanvas(800, 800);
//     cap = createCapture(VIDEO);
//     //cap.hide();
//     posenet = ml5.poseNet(cap, modelLoaded);
//     posenet.on('pose', gotPoses);
//     draw();
// }

// function gotPoses(poses){
//     console.log(poses);
//     if(poses.length > 0){
//         sp= poses[0].pose;
//     }
//     console.log(noseX + " " + noseY);
// }

// function modelLoaded(){
//     console.log("Model Loaded!");
// }

// function draw(){
//     image(cap, 30, 30);
//     fill(255,0,0);

//     if(sp){
//         for(let i=0; i<sp.keypoints.length; i++){
//             ellipse(sp.keypoints[i].position.x, sp.keypoints[i].position.y, 50, 50);
//     }
//     }


// }


// function setup(){
//     createCanvas(800, 600);
//     // background(0);
//     // console.log("Setup function!");
//     // sharuk_img = loadImage('images/shahrukh.png');
//     cap = createCapture(VIDEO);
//     posenet = ml5.poseNet(cap, modelLoaded);
//     posenet.on('pose', gotPoses);
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function draw() {
//     r=getRandomArbitrary(0, 255);
//     g=getRandomArbitrary(0, 255);
//     b=getRandomArbitrary(0, 255);
//     fill(r,g,b);
//     ellipse(mouseX, mouseY, 50, 50);
// }

// function draw(){
//     // image(sharuk_img,100,100,100,100);
//     image = (cap, 0, 0, 800, 600);
//     fill(255, 0, 0);
//     ellipse(noseX, noseY, 30, 30);
// }
