/**
 * Calcula a massa de um objeto.
 *
 * @param {number} peso - Peso do objeto. A força deve estar em Newtons (N)
 * @param {number} gravidade - Força da gravidade. A gravidade deve estar em m/s^2
 * @returns {number} - Massa em quilogramas (kg)
 *
 * Exemplo:
 * const massa = getMassa(500, 9.8);
 * console.log(`A massa do objeto é ${massa}kg`);
 */

export function getMassa(peso, gravidade) {
  return peso / gravidade;
}
