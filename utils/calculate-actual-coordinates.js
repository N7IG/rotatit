function calculateActualCoordinates(pointToRotate, centerPoint) {
    return {
        x: pointToRotate.x + centerPoint.x,
        y: pointToRotate.y + centerPoint.y
    };
}
