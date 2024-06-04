/**
 * Calculate the max acceleration of an object.
 *
 * @param {number} activeForce - Active force exerted on the object. The force must be in Newtons (N)
 * @param {number} reverseForce - Reverse force exerted on the object. The force must be in Newtons (N)
 * @returns {number} - Acceleration in m/s^2
 *
 * Example:
 * const acceleration = getMaxAcceleration(500, 100);
 * console.log(`The max acceleration is ${acceleration}m/s^2`);
 */

export function getMaxAcceleration(activeForce, reverseForce) {
  return activeForce / reverseForce;
}
