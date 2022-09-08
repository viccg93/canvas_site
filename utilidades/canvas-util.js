// utilidad para crear rectangulos redondeados

function drawRoundedRect(context,x,y,widht,height,radius){
    context.beginPath();
    context.moveTo(x,y+radius); 
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.stroke();
}

export {drawRoundedRect};