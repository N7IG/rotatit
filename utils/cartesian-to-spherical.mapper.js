function mapCartesianToSpherical({ x, y }) {
    let phi1 = Math.atan(y / x || 0);
    let phi2 = phi1 - Math.PI;
    let phi;
    let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (
        cround(x) === cround(r * Math.cos(phi1)) &&
        cround(y) === cround(r * Math.sin(phi1))
    ) {
        phi = phi1;
    } else {
        phi = phi2;
    }

    return {
        r,
        phi
    };
}

function cround(num) {
    return Math.round(num * 100) / 100;
}
