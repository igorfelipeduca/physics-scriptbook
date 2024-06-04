/**
 * Calcula a aceleração máxima de um objeto.
 *
 * @param {number} forcaNormal - Força ativa exercida sobre o objeto. A força deve estar em Newtons (N)
 * @param {number} forcaInversa - Força reversa exercida sobre o objeto. A força deve estar em Newtons (N)
 * @returns {number} - Aceleração em m/s^2
 *
 * Exemplo:
 * const aceleracao = getMaxAceleracao(500, 100);
 * console.log(`A aceleração máxima é ${aceleracao}m/s^2`);
 */

export function getMaxAceleracao(forcaNormal, forcaInversa) {
  return forcaNormal / forcaInversa;
}
