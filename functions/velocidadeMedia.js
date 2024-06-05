/**
 * Calcula a velocidade média de um objeto.
 *
 * @param {number} posicaoInicial - Posição inicial do objeto. A posição deve estar em metros (m)
 * @param {number} posicaoFinal - Posição final do objeto. A posição deve estar em metros (m)
 * @param {number} tempo - Tempo gasto em segundos (s)
 * @returns {number} - Velocidade media em m/s
 *
 * Exemplo:
 * const velocidadeMedia = getVelocidadeMedia(0, 100, 10);
 * console.log(`A velocidade media é ${velocidadeMedia}m/s`);
 */

export function getVelocidadeMedia(posicaoInicial, posicaoFinal, tempo) {
  return (posicaoFinal - posicaoInicial) / tempo
}
