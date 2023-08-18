

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.stroke();

console.log("Rect done")

ctx.beginPath();
ctx.strokeStyle = "#0081C8";
ctx.lineWidth = 7;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#FCB131";
ctx.lineWidth = 7;
ctx.arc(250, 225, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(300, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#00A651";
ctx.lineWidth = 7;
ctx.arc(350, 225, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#EE334E";
ctx.lineWidth = 7;
ctx.arc(400, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

