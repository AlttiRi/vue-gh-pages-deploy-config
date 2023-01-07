/**
 * Returns random CSS color value as HSLA.
 * @return {string}
 */
export function getRandomColor() {
    return "hsla(" + (Math.random() * 360) + ", 100%, 50%, 1)";
}
