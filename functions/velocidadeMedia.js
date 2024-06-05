/**
 * Calcula a velocidade média de um objeto.
 *
 * @param {number} posicaoInicial - Posição inicial do objeto. A posição deve estar em metros (m)
 * @param {number} posicaoFinal - Posição final do objeto. A posição deve estar em metros (m)
 * @param {number} tempo - Tempo gasto em segundos (s)
 * @param {string} medida - Unidade de medida da velocidade: 'm' para m/s ou 'km' para km/h.
 * @returns {number} - Velocidade media em m/s
 *
 * Exemplo:
 * const velocidadeMedia = getVelocidadeMedia(0, 100, 10);
 * console.log(`A velocidade media é ${velocidadeMedia}m/s`);
 */

export function getVelocidadeMedia(posicaoInicial, posicaoFinal, tempo, medida) {
  if (medida === 'm') {
    return (posicaoFinal - posicaoInicial) / tempo
  } else if (medida === 'km') {
    return (posicaoFinal - posicaoInicial) / tempo * 3.6
  }

  return "Informe a unidade de medida da velocidade"
}
