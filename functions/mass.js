/**
 * Calculate the mass of an object.
 *
 * @param {number} weight - Weight of the object. The force must be in Newtons (N)
 * @param {number} gravity - Gravity force. The force must be in Newtons (N)
 * @returns {number} - Mass in kilograms (kg)
 *
 * Example:
 * const mass = getMass(500, 9.8);
 * console.log(`The mass of the object is ${mass}kg`);
 */

export function getMass(weight, gravity) {
  return weight / gravity;
}
