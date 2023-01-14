/**
 * Returns random CSS color value as HSLA.
 * @return {string}
 */
export function getRandomColor() {
    return `hsla(${Math.trunc(Math.random() * 360)}, 100%, 50%, 1)`;
}

/**
 * Returns args as an array for `console.log` to make the text output blue colored.
 * @example console.log(...webBlue("HelloWorld"));
 * @param {string} text
 * @return {string[]}
 */
export function webBlue(text) {
    return [`%c${text}`,  "color: #2196f3; font-weight: bold;"];
}

/**
 * Returns args as an array for `console.log` to make the text output cyan colored.
 * @example console.log(...webColor("HelloWorld", "#00bcd4"));
 * @param {string} text
 * @param {string?} color
 * @return {string[]}
 */
export function webColor(text, color = "#000") {
    return [`%c${text}`, `color: ${color}; font-weight: bold;`];
}
