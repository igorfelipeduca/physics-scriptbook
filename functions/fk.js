/**
 * Calculate the kinectic intensity force exrted on an object.
 *
 * @param {number} coeficient - Value of the µk coefficient of friction
 * @param {number} normalFoce - Normal force exerted on the object. The force must be in Newtons (N)
 * @returns {number} - Force in newtons
 *
 * Example:
 * const fk = getKinecticIntensityForce(0.20, 500);
 * console.log(`The kinectic intensity force is ${fk}N`);
 */

export function getKinecticIntensityForce(coeficient, normalForce) {
  return coeficient * normalForce;
}
