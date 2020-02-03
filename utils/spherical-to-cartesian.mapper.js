function mapSphericalToCartesian({ r, phi }) {
    return {
        x: r * Math.cos(phi),
        y: r * Math.sin(phi)
    };
}
