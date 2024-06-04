/**
 * Calcula a força de intensidade cinética exercida sobre um objeto.
 *
 * @param {number} coeficiente - Valor do coeficiente de atrito µk
 * @param {number} forcaNormal - Força normal exercida sobre o objeto. A força deve estar em Newtons (N)
 * @returns {number} - Força em newtons
 *
 * Exemplo:
 * const fk = getForcaIntensidadeCinetica(0.20, 500);
 * console.log(`A força de intensidade cinética é ${fk}N`);
 */

export function getForcaIntensidadeCinetica(coeficiente, forcaNormal) {
  return coeficiente * forcaNormal;
}
