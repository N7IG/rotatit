function drawCircle(centerPoint, context, radius = 5, color = "red") {
    context.beginPath();
    context.arc(centerPoint.x, centerPoint.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = color;
    context.stroke();
}
