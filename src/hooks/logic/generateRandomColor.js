import Color from "color"

/**
 * Generates a random color using HSL values.
 *
 * @return {string} The generated color in hexadecimal format.
 */
export const generateRandomColor = () => {

    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    const l = Math.floor(Math.random() * (75 - 20 + 1)) + 20;

    return Color(`hsl(${h}, ${s}%, ${l}%)`).hex().toString();

}