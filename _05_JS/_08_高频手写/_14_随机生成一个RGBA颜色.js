const getRGBA = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(2);
    return `rgba(${R}, ${G}, ${B}, ${alpha})`
};

console.log(getRGBA());