// um exemplo de uso da função a seguir é:
// reverseForce = força de tensão de uma corda
// activeForce = força normal aplicada sobre o objeto
// getTraction(reverseForce, activeForce)
// retorna a força de tração

export function getTraction(reverseForce, activeForce) {
  return reverseForce - activeForce;
}
