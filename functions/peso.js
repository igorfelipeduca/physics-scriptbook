/**
 * Calcula a aceleração máxima de um objeto.
 *
 * @param {number} massa - Massa do objeto. A massa deve estar em quilogramas (kg)
 * @param {number} gravidade - Força da gravidade. A força deve estar em Newtons (N)
 * @returns {number} - Peso em Newtons
 *
 * Exemplo:
 * const peso = getPeso(500, 9.8);
 * console.log(`O peso do objeto é ${peso}N`);
 */

export function getPeso(massa, gravidade) {
  return massa * gravidade;
}
