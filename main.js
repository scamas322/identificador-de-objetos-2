object_detector ="";
img="";
Status="";
objects = [];

function preload()
{
    img = loadImage('https://tse1.mm.bing.net/th?id=OIP.KmC8rNUuiidi10e9igYr7wHaE8&pid=Api&P=0');
}

function setup()
{
    canvas= createCanvas(640,420);
    canvas.center();
    object_detector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="detectando objetos";
}

function modelloaded()
{
console.log("yatubo");
Status = true;
object_detector.detect(img, gotresults);
}

function gotresults(error,results)
{
if(error)
{
    console.log(error);
}
console.log(results);
objects=results;
}

function  draw()
{
    if(Status != undefined)
    {
        image(img,0,0,640,420);
        for(var i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML="objetos detectados";
            fill(255,0,0);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15); 
            noFill(); 
            stroke(255, 0, 0);
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}