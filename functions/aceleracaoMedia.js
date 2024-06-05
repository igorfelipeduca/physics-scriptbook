/**
 * Calcula a aceleração média de um objeto.
 *
 * @param {number} velocidadeInicial - Velocidade inicial do objeto. A velocidade deve estar em m/s
 * @param {number} velocidadeFinal - Velocidade final do objeto. A velocidade deve estar em m/s
 * @param {number} tempo - Tempo gasto em segundos (s)
 * @returns {number} - Aceleração média em m/s^2
 *
 * Exemplo:
 * const aceleracaoMedia = getAceleracaoMedia(0, 100, 10);
 * console.log(`A aceleração média é ${aceleracaoMedia}m/s^2`);
 */

export function getAceleracaoMedia(velocidadeInicial, velocidadeFinal, tempo) {
  return (velocidadeFinal - velocidadeInicial) / tempo
}
