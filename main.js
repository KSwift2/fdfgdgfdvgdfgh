function preload(){
}

function setup(){
    canvas= createCanvas(640 , 480);
    
    
    canvas.position(0, 350);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function draw() {
    image(video, 30, 43, 530, 420);
    tint(tint_color);
    circle(50, 25, 50);
    rect(75, 7, 450, 35, 55, 20);
    rect(75, 435, 450, 35, 55, 20);
   
    circle(550, 25, 50);
    circle(50, 450, 50);
     rect(30, 40, 35, 395, 55, 20);
    circle(550, 450, 50);
    rect(530, 40, 35, 395, 55, 20);
}


function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}