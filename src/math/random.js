/** @module Random-Functions*/
/**
 * Returns a random integer between given range.
 *
 * @param {number} [max=10] maximum range
 * @param {number} [min=0] minimum range
 * @returns {number}
 */
export function randomInt(max = 10, min = 0) {
	return Math.round(Math.random() * (max - min) + min);
}
