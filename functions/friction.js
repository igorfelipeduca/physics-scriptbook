/**
 * Calculate the friction force exerted on an object
 *
 * @param {number} reverseForce - Reverse force exerted on the object. The force must be in Newtons (N)
 * @param {number} activeForce - Active force exerted on the object. The force must be in Newtons (N)
 * @returns {number} - Force in newtons
 *
 * Example:
 * const friction = getFriction(500, 100);
 * console.log(`The friction force is ${friction}N`);
 */

export function getFriction(activeForce, reverseForce) {
  return activeForce - reverseForce;
}
