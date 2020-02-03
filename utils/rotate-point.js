function rotatePoint(pointToRotate, centerPoint, deltaPhi) {
    let relativePoint = calculateRelativeCoordinates(
        pointToRotate,
        centerPoint
    );
    let spericalPoint = mapCartesianToSpherical(relativePoint);
    spericalPoint.phi += deltaPhi;
    let rotatedCartesianPoint = mapSphericalToCartesian(spericalPoint);
    return calculateActualCoordinates(centerPoint, rotatedCartesianPoint);
}
