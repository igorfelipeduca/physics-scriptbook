/**
 * Calculate the max acceleration of an object.
 *
 * @param {number} mass - Mass of the object. The force must be in kilograms (kg)
 * @param {number} gravity - Gravity force. The force must be in Newtons (N)
 * @returns {number} - Weight in Newtons
 *
 * Example:
 * const weight = getWeight(500, 9.8);
 * console.log(`The weight of the object is ${weight}N`);
 */

export function getWeight(mass, gravity) {
  return mass * gravity;
}
