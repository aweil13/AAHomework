document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("mycanvas");
    canvasEl.height = 500;
    canvasEl.width = 500;
   
   const ctx =  canvasEl.getContext('2d');
   ctx.fillStyle = 'blue';
   ctx.fillRect(0, 0, 500, 500); 

   ctx.beginPath();
   ctx.arc(100, 100, 45, 0, 2*Math.PI , true);
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 25;
   ctx.stroke();
   ctx.fillStyle = 'orange';
   ctx.fill();

   ctx.beginPath();
   ctx.fillStyle = 'violet'
   ctx.moveTo(100, 50);
   ctx.lineTo(180, 500);
   ctx.lineTo(130, 20);
   ctx.closePath();
   ctx.fill();

//    ctx.clearRect(0, 0, 500, 500);

   
});
