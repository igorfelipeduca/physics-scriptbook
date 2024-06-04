/**
 * Calcula a força de tracao exercida sobre um objeto
 *
 * @param {number} forcaInversa - Força reversa exercida sobre o objeto. A força deve estar em Newtons (N)
 * @param {number} forcaNormal - Força ativa exercida sobre o objeto. A força deve estar em Newtons (N)
 * @returns {number} - Força em newtons
 *
 * Exemplo:
 * const tracao = getTracao(500, 100);
 * console.log(`A força de tracao é ${tracao}N`);
 */

export function getTracao(forcaNormal, forcaInversa) {
  return forcaNormal - forcaInversa;
}
