
/**
 * @param {rgb color} color 
 * @returns boolean
 */

function fontIsDark(color) {
    const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16));
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
}

export default fontIsDark