/**
 * Calcula a aceleração de um objeto.
 *
 * @param {number} forca - Força exercida sobre o objeto. A força deve estar em Newtons (N)
 * @param {number} massa - Massa do objeto. A massa deve estar em quilogramas (kg)
 * @returns {number} - Aceleração em m/s^2
 * 
 * Exemplo:
 * const aceleracao = getAceleracao(500, 100);
 * console.log(`A aceleração é ${aceleracao}m/s^2`);
 */

export function getAceleracao(forca, massa) {
  return forca / massa
}
